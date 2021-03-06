const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const { PostsShema } = require('./Posts');

const SALT_WORK_FACTOR = 10;


const UsersShema = mongoose.Schema({
  first_name: {
    type: String,
    require: true,
    trim: true,
  },
  last_name: {
    type: String,
    require: true,
    trim: true,
  },
  // profile_img: {
  //   type: String -> // url de la imagen que esta almacenada en otro servidor
  // },
  email: {
    type: String,
    require: true,
    trim: true,
    unique: true,
  },
  password: {
    type: String,
    require: true,
    trim: true,
  },
  is_active: {
    type: Boolean,
    default: true,
  },
  posts: [
    PostsShema,
    // images: [{ type: String }],
    // content: { type: String },
    // date: { type: Date, default: Date.now() },
    // tags: [{ type: String }],
    // reactions: [{
    //   user: String,
    //   reaction_name: String,
    // }],
  ],
  /*
  // Ejemplo de manejar embebido cardinalidad de 1-1
  // Reforzar un historial
  products: {
    street_name: {},
    zip_code: {},
    city: {},
    country: {},
  },
  // Ejemplo de manejar referenciada la cardinalidad de 1-1
  // Reforzar la integridad refencial
  products_ref: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Adresses',
  },
  */
});


// eslint-disable-next-line func-names
UsersShema.pre('save', function (next) {
  const user = this;

  // only hash the password if it has been modified (or is new)
  if (!user.isModified('password')) return next();

  // generate a salt
  // eslint-disable-next-line consistent-return
  bcrypt.genSalt(SALT_WORK_FACTOR, (err, salt) => {
    if (err) return next(err);

    // hash the password using our new salt
    bcrypt.hash(user.password, salt, (errHash, hash) => {
      if (errHash) return next(errHash);

      // override the cleartext password with the hashed one
      user.password = hash;
      return next();
    });
  });
  return false;
});


const Users = mongoose.model('Users', UsersShema);

module.exports = Users;
