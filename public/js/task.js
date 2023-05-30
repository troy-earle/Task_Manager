const table = document.querySelector("#tasks-list");

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

table.addEventListener("click", (event) => {
  const element = event.target;
  const id = element.getAttribute("data-id");
  document.location.replace("/api/tasks/" + id);
});

document
  .querySelector(".new-project-form")
  .addEventListener("submit", newFormHandler);
