const table = document.querySelector("#tasks-list");

// Function for creating a new task
const newFormHandler = async (event) => {
  event.preventDefault();

  const task_name = document.querySelector("#task-name").value.trim();
  const due_date = document.querySelector("#due-date").value.trim();
  const priority = document.querySelector("#priority").value.trim();

  if (task_name && due_date && priority) {
    try {
      // Send a POST request to the API endpoint using Axios
      const response = await axios.post(`/api/tasks`, {
        task_name,
        due_date,
        priority,
      });

      if (response.status === 200) {
        // If successful, redirect the browser to the tasks page
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

// Function for updating a task
const updateTaskhandler = async (event) => {
  event.preventDefault();

  const task_name = document.querySelector("#task-name").value.trim();
  const due_date = document.querySelector("#due-date").value.trim();
  const priority = document.querySelector("#priority").value.trim();

  if (task_name && due_date && priority) {
    try {
      // Extract the task ID from the current URL
      const str = window.location.href;
      const id = str.slice(str.lastIndexOf("/") + 1);
      console.log(id);

      // Send a PUT request to the API endpoint using Axios
      const response = await axios.put(`/api/tasks/` + id, {
        task_name,
        due_date,
        priority,
      });

      if (response.status === 200) {
        // If successful, redirect the browser to the tasks page
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


// Function for canceling the task update
const cancelHandler = async (event) => {
  event.preventDefault();
  window.location = "/api/tasks/";
};


// Function for completing a task
const completeHandler = async (event) => {
  event.preventDefault();

  // Extract the task ID from the current URL
  const str = window.location.href;
  const id = str.slice(str.lastIndexOf("/") + 1);
  try {
    // Send a DELETE request to the API endpoint using Axios
    const response = await axios.delete(`/api/tasks/${id}`, {});

    if (response.status === 200) {
      // If successful, redirect the browser to the tasks page
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

// Event listener for clicking a task in the table
table.addEventListener("click", (event) => {
  const element = event.target;
  const id = element.getAttribute("data-id");
  window.location.replace("/api/tasks/" + id);
});


// Check if the create-task form exists on the page
if (document.querySelector(".create-task")) {
  // Attach event listener to the create-task form
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
