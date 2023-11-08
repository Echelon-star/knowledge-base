import Joi from "joi";

export const createBookSchema = Joi.object({
    title: Joi.string().trim().min(3).max(30).required(),
    author: Joi.string().trim().min(2).max(20).required(),
    summary: Joi.string().trim().min(10).max(100).required()
})

export const updateBookSchema = Joi.object({
    title: Joi.string().trim().min(3).max(30).optional(),
    author: Joi.string().trim().min(2).max(20).optional(),
    summary: Joi.string().trim().min(10).max(100).optional()
}).or('title', 'author', 'summary') // At least one of these keys must be in the object to be valid.
.required()