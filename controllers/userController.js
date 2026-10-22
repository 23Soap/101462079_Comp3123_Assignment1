const User = require("../models/User");
const bcrypt = require('bcrypt');

const signup = async (req,res) => {
    try {
        const { username, email, password} = req.body

        const existingUser = await User.findOne({email: email});

        if (existingUser){
            return res.status(400).json({message: "Already In Use"})
        }

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password,salt);

        const newUser = new User({
            username: username,
            email: email,
            password: hashedPassword
        });

        await newUser.save();
            res.status(201).json({
                message: "User created successfully",
                user: newUser
            });

    }catch (error){
        res.status(500).json({message:"Server Error"})}

};

const login = async(req,res) => {
    try {
        const {email, password} = req.body
        const loginUser = await User.findOne({email:email});
        if (!loginUser){
            return res.status(404).json({message: "User Couldnt Find"})
        }

        const isSame = await bcrypt.compare(password,loginUser.password);

        if (!isSame){
            return res.status(400).json({message: "Password Not Matching"})
        }else
            return res.status(200).json({message: "Login Succesfull"});

    }catch (error){
        res.status(500).json({message: "Server Error!!"})
    }
}


module.exports = {signup,login};
