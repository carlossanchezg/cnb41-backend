const { Users } = require('../models');


module.exports = {
  create: (body) => {
    const NewUser = new Users(body);
    return NewUser.save();
  },
};
