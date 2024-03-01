import jwt from 'jsonwebtoken'

const auth = (req, res, next) => {
    const authToken = req.headers.authorization

    if (!authToken) {
        return res.status(404).json("You have't account!")
    }

    const myToken = authToken.split(' ')[1]

    jwt.verify(myToken, process.env.JWT_SECRET, (error, decoded) => {
        if (error) {
            return res.status(404).json("Token is not found tray register or login")
        } else {
            req.user = decoded
            next()
        }
    })
}

export default auth