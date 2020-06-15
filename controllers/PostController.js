const { UsersService, PostsService } = require('../services');

module.exports = {
  create: async (req, res) => {
    const { id } = req.params;
    try {
      // TICKET
      // 1) Encontrar el uuario por el id que me pasan por params
      const user = await UsersService.findOneById(id);
      // 2) Crear el objeto de POST
      const post = await PostsService.create(req.body);
      // 3) Agregar post al usuario
      const userWhitPost = await UsersService.addPost(user, post);
      // 4) Reponder al cliente con el usuario actualizado
      res.status(201).json(userWhitPost);
    } catch (error) {
      res.status(400).json({ message: 'Error user post', error });
    }
  },

};
