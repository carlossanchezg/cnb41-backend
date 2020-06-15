/* eslint-disable no-console */

// process.env.MI_VARIABLE_DE_ENTORNO asi accedemos a variables
const mongoose = require('mongoose');

const { MONGO_URI } = require('../config');

mongoose.connect(MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('Database connected'))
  .catch(() => console.log('error connecting to database'));
