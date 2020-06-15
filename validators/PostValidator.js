const {
  celebrate, Joi, Segments,
} = require('celebrate');

// images: [{ type: String }],
//     content: { type: String },
//     date: { type: Date, default: Date.now() },
//     tags: [{ type: String }],

module.exports = {
  create: celebrate({
    [Segments.BODY]: Joi.object().keys({
      images: Joi.array().items(Joi.string()),
      content: Joi.string().required(),
      date: Joi.date(),
      tags: Joi.array().items(Joi.string()),
    }),
  }),
};
