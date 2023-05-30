# Task_Manager

This is a full-stack task manager app built using Node.js, Express.js, Sequelize, Handlebars.js, and MVC architecture.


## User Story

- As a user, I want to see a list of current tasks.
- As a user, I want to be able to create an account.
- As a registered user, I want to post my own tasks.r


## Acceptance Criteria

- The homepage route (`/`) should render the first page with a login option.
- The login route (`/login`) should render a page with options to log in and sign up.
- An existing user should be able to enter their credentials on the login page to create a session on the server.
- A new user should be able to create an account on the login page and then be immediately logged in with a session.
- The task details route (`/task/:id`) should render an individual task's details based on the route parameter ID.
- Users on the task list page should be able to use the form to create a new task in the database.
- Only a logged-in user should be able to visit the task list page.
- Users on the task details page should have the option to select a "complete" button to change their task status from incomplete to complete.
- A logged-in user should be able to select a "Logout" button to remove their session.
- The session for a logged-in user should expire after a set time.
- API routes to create and delete tasks should be protected from non-logged-in users.
- The code should be organized using the MVC architecture.
- Views should be rendered with Handlebars.js templates.


## Screenshots




## Installation

To use this application, please follow these steps:
1. Clone the repository to your local machine by `git clone` command.
2. Navigate to the project's root directory in your terminal or command prompt.
3. Run `npm install` to install the required dependencies.


## Usage

1. Set up your MySQL database by entering your database name, MySQL username, and MySQL password in an environment variable file (e.g., `.env`). 
2. Run the necessary schema and seed commands to create and populate the database with test data. This includes running `mysql -u root -p` and then `source schema.sql` .
3. Start the application by running the command `npm start`.
4. Use an API testing tool like Insomnia to test the available routes (GET, POST, DELETE) for tasks.


## Contributing
Contributions are welcome! If you find any issues or have suggestions for improvement, please feel free to submit a pull request.

