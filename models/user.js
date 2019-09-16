module.exports = function(sequelize, DataTypes) {
  const User = sequelize.define("User", {
    firstname: {
      type: DataTypes.STRING,
      allowNull: {
        msg: "Please enter your first name."
      },
      validate: {
        notEmpty: {
          msg: "Please enter your first name."
        }
      }
    },
    lastname: {
      type: DataTypes.STRING,
      allowNull: {
        msg: "Please enter your last name."
      },
      validate: {
        notEmpty: {
          msg: "Please enter your last name."
        }
      }
    },
    username: {
      type: DataTypes.STRING,
      allowNull: {
        msg: "Please enter a username."
      },
      validate: {
        notEmpty: {
          msg: "Please enter a username."
        }
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: {
        msg: "Please enter a password at least 10 characters long."
      },
      validate: {
        notEmpty: true,
        len: {
          args: [10,100],
          msg: "Please enter a password at least 10 characters long."
        },
        
      }
    }
  });
  return User
}