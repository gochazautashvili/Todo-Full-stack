import mongoose from 'mongoose'

const TodoSchema = new mongoose.Schema({
    userGmail: { type: String, required: true },
    title: { type: String, required: true },
    completed: { type: Boolean, default: false }
})

const TodoModel = mongoose.model('todos', TodoSchema)
export default TodoModel