import TodoModel from "../models/Todo.Model.js"

export const createTodo = async (req, res) => {
    const { title } = req.body

    try {
        const newTodo = await TodoModel.create({ title, userGmail: req.user })

        res.status(201).json(newTodo)
    } catch (error) {
        res.status(400).json(error)
    }
}

export const getAllTodo = async (req, res) => {
    try {
        const todo = await TodoModel.find({ userGmail: req.user })

        if (!todo.length) {
            return res.status(404).json("You have not todo")
        }

        res.status(200).json(todo)
    } catch (error) {
        res.status(400).json(error)
    }
}

export const DeleteTodoById = async (req, res) => {
    const { _id } = req.query

    try {
        const deletedTodo = await TodoModel.findByIdAndDelete({ _id })

        res.status(200).json(deletedTodo)
    } catch (error) {
        res.status(400).json(error)
    }
}

export const UpdateTodo = async (req, res) => {
    const { updateText } = req.body
    const { _id } = req.query

    try {
        const updateTodo = await TodoModel.findByIdAndUpdate({ _id }, { title: updateText })

        if (!updateTodo) {
            return res.status(404).json("Con't update todo")
        }

        res.status(200).json(updateTodo)
    } catch (error) {
        res.status(400).json(error)
    }
}

export const ToggleTodo = async (req, res) => {
    const { _id } = req.query

    try {
        const todo = await TodoModel.findById({ _id });

        if (!todo) {
            return res.status(404).json("Can't toggle todo")
        }

        if (todo) {
            todo.completed = !todo.completed;
            await todo.save();
        }

        res.status(200).json(todo)
    } catch (error) {
        res.status(400).json(error)
        console.log(error);
    }
}