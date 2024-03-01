import express from 'express'
import { getAllTodo, DeleteTodoById, ToggleTodo, UpdateTodo, createTodo } from '../controllers/Todo.controller.js'

const router = express.Router()

router.get('/', getAllTodo)
router.post('/', createTodo)
router.delete('/', DeleteTodoById)
router.patch('/', ToggleTodo)
router.put('/', UpdateTodo)


export default router