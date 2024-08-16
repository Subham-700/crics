// const router  = require("express").Router();
// const {User} = require("../models/user.models");
// const Joi = require("joi");
// const bcrypt = require("bcrypt");

// router.post("/",async(req,res) =>{
//     try{
//         const{error} = validate(req.body);
//         if(error){
//             return res.status(400).send({Message:error.details[0].message});

//         }
//         const user = await User.findOne({email:req.body.email});
//         if(!user)
//             return res.status(401).send({message:"Invalid Email or Password"});
//         const validPassword = await bcrypt.compare(
//             req.body.password,user.password
//         );
//         if(!validPassword)
//             return res.status(401).send({message:"Invalid email or Password"});
//         const token  = user.generateAuthToken();
//         res.status(200).send({data:token,message:"Logged in successfully"})
//     }catch(error){
//         res.status(500).send({message:"internal server error"})
//     }
// })

// const validate = (data) =>{
//     const schema = Joi.object({
//         email:Joi.string().email().required().label("Email"),
//         password:Joi.string.required().label("Password")
//     });
//     return schema.validate(data);
// }

// module.exports = router;




const router = require('express').Router();
const { User, validateUser, validateLogin } = require('../models/user.models');
const bcrypt = require('bcrypt');

// Signup Route
router.post('/signup', async (req, res) => {
    try {
        // Validate request
        const { error } = validateUser(req.body);
        if (error) return res.status(400).send({ message: error.details[0].message });

        // Check if user already exists
        let user = await User.findOne({ email: req.body.email });
        if (user) return res.status(400).send({ message: 'User already registered.' });

        // Hash password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(req.body.password, salt);

        // Create new user
        user = new User({
            name: req.body.name,
            email: req.body.email,
            password: hashedPassword
        });

        await user.save();

        res.status(201).send({ message: 'User registered successfully.' });
    } catch (error) {
        res.status(500).send({ message: 'Internal server error.' });
    }
});






























// Login Route
// router.post('/login', async (req, res) => {
//     try {
//         // Validate request
//         const { error } = validateLogin(req.body);
//         if (error) return res.status(400).send({ message: error.details[0].message });

//         // Check if user exists
//         const user = await User.findOne({ email: req.body.email });
//         if (!user) return res.status(400).send({ message: 'Invalid email or password.' });

//         // Check password
//         const validPassword = await bcrypt.compare(req.body.password, user.password);
//         if (!validPassword) return res.status(400).send({ message: 'Invalid email or password.' });

//         // Generate auth token
//         const token = user.generateAuthToken();
//         res.status(200).send({ token, message: 'Logged in successfully.' });
//     } catch (error) {
//         res.status(500).send({ message: 'Internal server error.' });
//     }
// });



router.post('/login', async (req, res) => {
    try {
        console.log("Request Body:", req.body);
        const { error } = validateLogin(req.body);
        if (error) return res.status(400).send({ message: error.details[0].message });

        const user = await User.findOne({ email: req.body.email });
        console.log("User Found:", user);
        if (!user) return res.status(401).send({ message: "Invalid Email or Password" });

        const validPassword = await bcrypt.compare(req.body.password, user.password);
        console.log("Password Valid:", validPassword);
        if (!validPassword) return res.status(401).send({ message: "Invalid Email or Password" });

        const token = user.generateAuthToken();
        res.status(200).send({ data: token, message: "Logged in successfully" });
    } catch (error) {
        console.error('Login Error:', error);  // Detailed log
        res.status(500).send({ message: "Internal Server Error" });
    }
});

  
  module.exports = router;






