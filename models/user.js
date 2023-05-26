// Import necessary dependencies
const { Model, DataTypes } = require('sequelize');
const bcrypt = require('bcrypt');
const sequelize = require('../config/connection');

// Create User model by extending the Sequelize Model class
class User extends Model {
    // Method to compare login password with stored password
    checkPassword(loginPw) {
    return bcrypt.compareSync(loginPw, this.password);
  }
}


// Initialize User model with column definitions and options
User.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true,
      },
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [8],
      },
    },
  },
  {
    // Define hooks to hash the password before creating and updating a user
    hooks: {
        // Before creating a new user, execute the following asynchronous function to hash the user's password before storing it in the database.  
      beforeCreate: async (newUserData) => {
        // Hash the password using bcrypt with a salt factor of 10
        newUserData.password = await bcrypt.hash(newUserData.password, 10);
        return newUserData;
      },
      // Before updating a user, execute the following asynchronous function to hash the user's password before storing it in the database.
      beforeUpdate: async (updatedUserData) => {
        // Hash the updated password using bcrypt with a salt factor of 10
        updatedUserData.password = await bcrypt.hash(updatedUserData.password, 10);
        return updatedUserData;
      },
    },

    // Provide the Sequelize connection and other configuration options
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'user',
  }
);

module.exports = User;
