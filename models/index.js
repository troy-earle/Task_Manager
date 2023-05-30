// Import User and Task models
const User = require('./User.js');
const Task = require('./Task.js');

// Define associations between User and Task models
User.hasMany(Task, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

Task.belongsTo(User, {
  foreignKey: 'user_id'
});

// Export User and Task models
module.exports = { User, Task };
