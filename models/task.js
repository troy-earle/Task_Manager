// Import necessary dependencies
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

// Create Task model by extending the Sequelize Model class
class Task extends Model {}

// Initialize Task model with column definitions and options
Task.init(
  {
    // Define the 'id' column
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },
    // Define the 'task_name' column
    task_name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    // Define the 'due_date' column
    due_date: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW,
    },
    // Define the 'priority' column
    priority: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    // Clarify whether task completed or not
    completed: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    // Define the 'user_id' column as a foreign key referencing the 'id' column of the 'user' model
    user_id: {
        type: DataTypes.INTEGER,
        references: {
            model: 'user',
            key: 'id',
      },
    },
  },
  {
    // Provide the Sequelize connection and other configuration options
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'task',
  }
);

// Export the Task model
module.exports = Task;
