const table = document.querySelector("#tasks-list");
let id;

//creating a new task
const newFormHandler = async (event) => {
  console.log("hey you clicked save");
  event.preventDefault();

  const task_name = document.querySelector("#task-name").value.trim();
  const due_date = document.querySelector("#due-date").value.trim();
  const priority = document.querySelector("#priority").value.trim();

  if (task_name && due_date && priority) {
    const response = await fetch(`/api/tasks`, {
      method: "POST",
      body: JSON.stringify({ task_name, due_date, priority }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
      document.location.replace("/api/tasks");
    } else {
      alert("Failed to create task");
    }
  }
};

const updateTaskhandler = async (event) => {
  console.log("hey you are updating");

  event.preventDefault();

  const task_name = document.querySelector("#task-name").value.trim();
  const due_date = document.querySelector("#due-date").value.trim();
  const priority = document.querySelector("#priority").value.trim();

  if (task_name && due_date && priority) {
    const response = await fetch(`/api/tasks/` + id, {
      method: "PUT",
      body: JSON.stringify({ task_name, due_date, priority }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
      document.location.replace("/api/tasks");
    } else {
      alert("Failed to create task");
    }
  }
};

const cancelHandler = async (event) => {
  console.log("hey you are cancelling");
  document.location.replace("../");
};

table.addEventListener("click", (event, id) => {
  const element = event.target;
  id = element.getAttribute("data-id");
  document.location.replace("/api/tasks/" + id);
});

if (document.querySelector(".create-task")) {
  document
    .querySelector(".create-task")
    .addEventListener("submit", newFormHandler);
} else {
  const save = document.querySelector(".save");
  const cancel = document.querySelector(".cancel");
  const complete = document.querySelector(".complete");

  save.addEventListener("click", updateTaskhandler);

  cancel.addEventListener("click", cancelHandler);
}
