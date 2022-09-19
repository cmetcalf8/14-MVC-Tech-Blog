const { User } = require('../models');

const userData = [
  {
    username: "Jim",
    email: "jim@gmail.com",
    password: "password1234"
  },
  {
    username: "Pam",
    email: "pam@gmail.com",
    password: "password1234"
  },
  {
    username: "Michael",
    email: "michael@gmail.com",
    password: "password1234"
  },
  {
    username: "Kevin",
    email: "kevin@gmail.com",
    password: "password1234"
  },
  {
    username: "Angela",
    email: "angela@gmail.com",
    password: "password1234"
  }
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;