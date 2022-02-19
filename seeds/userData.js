const { User } = require('../models');

const userdata =
[
  {
    "username": "Bill",
    "password": "password"
  },
  {
    "username": "Nelson",
    "password": "password"
  },
  {
    "username": "Catilayah",
    "password": "password"
  },
  {
    "username": "Zorayah Mmbando",
    "password": "password"
  }
];

const seedUser = () => User.bulkCreate(userdata, {
  individualHooks: true,
  returning: true,
});

module.exports = seedUser;