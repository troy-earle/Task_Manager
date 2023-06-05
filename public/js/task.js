const table = document.querySelector("#tasks-list");

//creating a new task
const newFormHandler = async (event) => {
  // console.log("hey you clicked save");
  event.preventDefault();

  const task_name = document.querySelector("#task-name").value.trim();
  const due_date = document.querySelector("#due-date").value.trim();
  const priority = document.querySelector("#priority").value.trim();

  if (task_name && due_date && priority) {
    try {
      const response = await axios.post(`/api/tasks`, {
        task_name,
        due_date,
        priority
      });

      if (response.status === 200) {
        window.location.replace("/api/tasks");
      } else {
        alert("Failed to create task");
      }
    } catch (error) {
      // Handle any errors here
      console.error(error);
      alert("An error occurred during creating new task");
    }
  } else {
    alert("Please make sure that all fields are complete.");
  }
};


//updating a task
const updateTaskhandler = async (event) => {
  event.preventDefault();

  const task_name = document.querySelector("#task-name").value.trim();
  const due_date = document.querySelector("#due-date").value.trim();
  const priority = document.querySelector("#priority").value.trim();

  if (task_name && due_date && priority) {

    try {
      const str = window.location.href;
      const id = str.slice(str.lastIndexOf("/") + 1);

      const response = await axios.put(`/api/tasks/` + id, {
        task_name,
        due_date,
        priority,
      });

      if (response.status === 200) {
        window.location.replace("/api/tasks");
      } else {
        alert("Failed to update task");
      }
    } catch (error) {
      // Handle any errors here
      console.error(error);
      alert("An error occurred during updating task");

    }
  } else {
    alert("Please make sure that all fields are complete.");
  }
  return false;
};

const cancelHandler = async (event) => {
  event.preventDefault();
  // console.log("hey you are cancelling");
  window.location = "/api/tasks/";
};

const completeHandler = async (event) => {
  event.preventDefault();
  // console.log("hey you are deleting");

  const str = window.location.href;
  const id = str.slice(str.lastIndexOf("/") + 1);
  try {
    const response = await axios.delete(`/api/tasks/${id}`, {});

    if (response.status === 200) {
      window.location = "/api/tasks/";
    } else {
      alert("Failed to delete task");
    }
  } catch (error) {
    // Handle any errors here
    console.error(error);
    alert("An error occurred during completing task");
  }
  return false;
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
