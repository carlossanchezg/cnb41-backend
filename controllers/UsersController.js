const { UsersService } = require('../services');

module.exports = {
  create: (req, res) => {
    UsersService.create(req.body)
      .then((user) => res.status(201).json(user))
      .catch((err) => res.status(400).json(err));
  },
  findAll: (req, res) => {
    // console.log(':)', req.decoded.email);
    UsersService.findAll()
      .then((user) => res.status(200).json(user))
      .catch((err) => res.status(400).json(err));
  },
};
