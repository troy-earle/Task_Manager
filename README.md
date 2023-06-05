# Task Manager

This is a full-stack task manager app built using Node.js, Express.js, Sequelize, Handlebars.js, and MVC architecture.


## User Story

- As a user, I want to see a list of current tasks.
- As a user, I want to be able to create an account.
- As a registered user, I want to post my own tasks.


## Acceptance Criteria

- Homepage route (`/`) renders the initial page with a login option.
- Login route (`/login`) renders a page with options to log in and sign up.
- New users can add their information and sign up on the login/sign-up page.
- Existing users can enter their credentials on the login page to create a session.
- Logged-in users are directed to the task list page upon login.
- Task list page displays the current tasks of the logged-in user.
- Users can use a form on the task list page to create new tasks in the database.
- Clicking on a current task on the task list page allows users to update the task details.
- Clicking the "complete task" button removes a task from the current task list.
- Sessions for logged-in users expire after a set time.
- Only logged-in users have access to the task list page.
- Users can select the "Logout" button to remove their session.
- API routes for task creation and deletion are protected and accessible to logged-in users.
- Codebase follows the MVC architecture.
- Views are rendered with Handlebars.js templates.


## Screenshots

**Homepage**
![Screenshot task manager - homepage](https://github.com/troy-earle/Task_Manager/assets/124220654/7189351e-795d-45a8-a75d-d1664b4fb900)

**Login Page**
![Screenshot task manager log in page](https://github.com/troy-earle/Task_Manager/assets/124220654/afe15418-d8b6-4c18-ba02-1c8d58316e25)

**Task List**
![Screenshot task manager task list](https://github.com/troy-earle/Task_Manager/assets/124220654/cfec38bf-a561-4eff-be0c-9c197e018ed5)

**Update Task**
![Screenshot task manager update task](https://github.com/troy-earle/Task_Manager/assets/124220654/96b9fd4e-414e-4dcb-84ac-a3f50fd1abe7)



## Installation

To use this application, please follow these steps:
1. Clone the repository to your local machine by `git clone` command.
2. Navigate to the project's root directory in your terminal or command prompt.
3. Run `npm install` to install the required dependencies.


## Usage

1. Set up your MySQL database by providing the necessary credentials in the environment variable file (e.g., `.env`).
2. Run the schema and seed commands to create and populate the database.
3. Start the application: `npm start`
4. Test the available routes (GET, PUT, POST, DELETE) for tasks using an API testing tool like Insomnia.


## Contributing

Contributions are welcome! Please submit a pull request if you find any issues or have suggestions for improvement.


## Heroku Link: https://group6-task-manager.herokuapp.com/


