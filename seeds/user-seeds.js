const { User } = require('../models');

const userData = [
  {
    name: "Jim",
    email: "jim@gmail.com",
    password: "password1234"
  },
  {
    name: "Pam",
    email: "pam@gmail.com",
    password: "password1234"
  },
  {
    name: "Michael",
    email: "michael@gmail.com",
    password: "password1234"
  },
  {
    name: "Kevin",
    email: "kevin@gmail.com",
    password: "password1234"
  },
  {
    name: "Angela",
    email: "angela@gmail.com",
    password: "password1234"
  }
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;