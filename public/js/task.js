//creating a new task
const newFormHandler = async (event) => {
  event.preventDefault();

  const taskName = document.querySelector("#task-name").value.trim();
  const dueDate = document.querySelector("#due-date").value.trim();
  const priority = document.querySelector("#priority").value.trim();

  if (taskName && dueDate && priority) {
    const response = await fetch(`/api/projects`, {
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

window.onload = function () {
  var table = document.getElementById("tasks");
  var rows = table.getElementsByTagName("tr");

  for (var i = 0; i < rows.length; i++) {
    rows[i].addEventListener("click", function () {
      window.location.href = "newpage.html"; //this will need to call the route
    });
  }
};
