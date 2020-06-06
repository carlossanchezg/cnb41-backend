const express = require('express');

const router = express.Router();


// api.use('/api');

const { UsersController } = require('../controllers');

router.post('/api/v1/users', UsersController.create);

module.exports = router;
