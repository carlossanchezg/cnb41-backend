const bycrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

module.exports = {
  comparePasswords: (loggedPassword, registerPassword) => bycrypt
    .compare(loggedPassword, registerPassword),
  createToken: (user) => {
    const payload = {
      // eslint-disable-next-line no-underscore-dangle
      id: user._id,
      email: user.email,
      first_name: user.first_name,
    };
    try {
      const token = jwt.sign(payload, process.env.JWT_SECRET);
      return token;
    } catch (error) {
      return undefined;
    }
  },
};