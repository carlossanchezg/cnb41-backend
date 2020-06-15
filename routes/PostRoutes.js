const express = require('express');

const router = express.Router();


// api.use('/api');

const { PostController } = require('../controllers');
const { PostValidator } = require('../validators');

router.post('/users/:id/posts',
  PostValidator.create,
  PostController.create);

module.exports = router;
