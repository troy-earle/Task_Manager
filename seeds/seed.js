const sequelize = require('../config/connection');
const { User, Task } = require('../models');

const userData = require('./userData.json');
const taskData = require('./taskData.json');

const seedDatabase = async () => {
    // Sync the Sequelize models with the database and force the creation of new tables
    await sequelize.sync({ force: true });

    // Bulk create users using the userData array, with individual hooks enabled and returning the created records
    const users = await User.bulkCreate(userData, {
        individualHooks: true,
        returning: true,
    });

    // Iterate over each task in taskData and create a new task with a randomly assigned user_id
    for (const task of taskData) {
        await Task.create({
            ...Task,
            user_id: users[Math.floor(Math.random() * users.length)].id,
        });
    }

    // Exit the process, indicating that the database seeding is complete
    process.exit(0);
};

// Invoke the seedDatabase function to initiate the database seeding
seedDatabase();
