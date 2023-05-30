//creating a new task
const newFormHandler = async (event) => {
  event.preventDefault();

  const taskName = document.querySelector("#task-name").value.trim();
  const dueDate = document.querySelector("#due-date").value.trim();
  const priority = document.querySelector("#priority").value.trim();

  if (taskName && dueDate && priority) {
    const response = await fetch(`/api/tasks`, {
      method: "POST",
      body: JSON.stringify({ taskName, dueDate, priority }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
      document.location.replace("/profile");
    } else {
      alert("Failed to create task");
    }
  }
};

//on click of a task in the table, load the task details using a route

// window.onload = function () {
//   const table = document.getElementById("tasks");
//   const rows = table.getElementsByTagName("tr");

//   rows.addEventListener("click", function () {
//     document.location.replace("/api/tasks/" + i);
//   }

//   for (var i = 0; i < rows.length; i++) {
//     rows[i].addEventListener("click", function () {
//       document.location.replace("/api/tasks/" + i);
//     });
//   }
// };

const openTaskhandler = async (event) => {
  console.log("clicked row");
  if (event.target.hasAttribute("data-id")) {
    const id = event.target.getAttribute("data-id");
    document.location.replace("/api/tasks/" + id);
  }
};

$(document).on("click", "#tasks", function () {
  console.log("clicked row");
});

document
  .querySelector(".new-project-form")
  .addEventListener("submit", newFormHandler);

document
  .querySelector("#tasks-list")
  .addEventListener("click", openTaskhandler);
