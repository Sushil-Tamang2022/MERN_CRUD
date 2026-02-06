import User from "../models/userModel.js"

export const register = async (req, res) => {
    const image= req.file.filename;
    const {name, email, password} = req.body;

    // todo
    // 1. get user data
    // 2. check is empty
    // 3. isUser exists or not?
    // if user Found then return suitable message
    // if user not Found user hash the password
    // then sae that user to the database
    // if user found then return suitable message

    if (!image || !name || !email || !password) {
        return res.status(404).json({
            status: 404,
            success: status < 400,
            message: "All fields must be filled!"

        })
    }

    let isExist = await User.findOne({email: email})
    if (isExist) {
        return res.status(400).json({
            status: 400,
            success: status < 400,
            message: "User already exists!"
        })
    }

    try {
        let userRes = new User({name, email, password, image});
    userRes = await userRes.save()
    return res.status(201).json({
        staus: 201,
        success: status < 400,
        message: ""
    })

    } catch (error) {
        res.status(500).json({
            status: 500,
            success: false,
            message: "Internal Server Error!",
            error
        })
    }

}

export const login = (req, res) => {
    
}

export const getUer = (req, res) => {
    
}

export const getMe = (req, res) => {
    
}