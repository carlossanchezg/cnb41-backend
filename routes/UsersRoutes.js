const express = require('express');

const router = express.Router();


// api.use('/api');

const { UsersController } = require('../controllers');
const { UsersValidator } = require('../validators');
const { veryToken } = require('../middlewares');

router.post('/users',
  UsersValidator.create,
  UsersController.create);

router.get('/users',
  veryToken,
  UsersController.findAll);

module.exports = router;
