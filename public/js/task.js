const table = document.querySelector("#tasks-list");

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
      window.location.replace("/api/tasks");
    } else {
      alert("Failed to create task");
    }
  }
};

//updating a task
const updateTaskhandler = async (event) => {
  event.preventDefault();

  const task_name = document.querySelector("#task-name").value.trim();
  const due_date = document.querySelector("#due-date").value.trim();
  const priority = document.querySelector("#priority").value.trim();

  if (task_name && due_date && priority) {
    const str = window.location.href;
    const id = str.slice(str.lastIndexOf("/") + 1);

    console.log("hey you are updating", id);

    const response = await fetch(`/api/tasks/` + id, {
      method: "PUT",
      body: JSON.stringify({ task_name, due_date, priority }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
      window.location.replace("/api/tasks");
    } else {
      alert("Failed to create task");
    }
  }
};

const cancelHandler = async (event) => {
  event.preventDefault();
  console.log("hey you are cancelling");
  window.location = "/api/tasks/";
};

const completeHandler = async (event) => {
  event.preventDefault();
  console.log("hey you are deleting");

  const str = window.location.href;
  const id = str.slice(str.lastIndexOf("/") + 1);

  const response = await fetch(`/api/tasks/${id}`, {
    method: "DELETE",
  });

  if (response.ok) {
    window.location = "/api/tasks/";
  } else {
    alert("Failed to delete task");
  }
};

table.addEventListener("click", (event) => {
  const element = event.target;
  const id = element.getAttribute("data-id");
  window.location.replace("/api/tasks/" + id);
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

  complete.addEventListener("click", completeHandler);
}
