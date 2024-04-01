import Joi from "joi";

export const createBookSchema = Joi.object({
    title: Joi.string().trim().min(3).max(30).required(),
    author: Joi.string().trim().min(2).max(20).required(),
    summary: Joi.string().trim().min(10).max(2000).required(),
    genre: Joi.array().items( Joi.string().min(3).max(10).lowercase().required()).optional()
})

export const updateBookSchema = Joi.object({
    title: Joi.string().trim().min(3).max(30).optional(),
    author: Joi.string().trim().min(2).max(20).optional(),
    summary: Joi.string().trim().min(10).max(2000).optional(),
    genre: Joi.array().items( Joi.string().min(3).max(10).lowercase().required()).optional()
}).or('title', 'author', 'summary','genre') // At least one of these keys must be in the object to be valid.
.required()