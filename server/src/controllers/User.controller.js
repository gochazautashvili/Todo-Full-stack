import UserModel from "../models/User.Model.js"
import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'

export const Register = async (req, res) => {
    const { name, age, gmail, password } = req.body

    const user = await UserModel.findOne({ gmail })

    if (user) {
        return res.status(401).json("User already exist")
    }

    try {
        const hashedPassword = await bcrypt.hash(password, 10)

        const RegisteredUser = await UserModel.create({ name, age, gmail, password: hashedPassword })

        const token = jwt.sign(gmail, process.env.JWT_SECRET)

        return res.status(200).json({ RegisteredUser, token })
    } catch (error) {
        res.status(400).json(error)
    }
}

export const Login = async (req, res) => {
    const { name, gmail, password } = req.body

    try {
        const user = await UserModel.findOne({ gmail })

        if (!user) {
            return res.status(400).json("Incorrect gmail. Please try again.")
        }

        if (name !== user.name) {
            return res.status(400).json("Incorrect name. Please try again.")
        }

        const userPassword = await bcrypt.compare(password, user.password)

        if (!userPassword) {
            return res.status(400).json("Incorrect password. Please try again.")
        }

        const token = jwt.sign(gmail, process.env.JWT_SECRET)

        return res.status(200).json({ user, token })
    } catch (error) {
        res.status(400).json(error)
    }
}