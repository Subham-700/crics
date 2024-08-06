const mongoose = require("mongoose");
require('dotenv').config();

console.log('Loaded DB URI:', process.env.DB); // Log the DB URI

module.exports = () => {
    const DB = process.env.DB;

    if (!DB) {
        console.error('Database URI is not defined');
        process.exit(1);
    }

    try {
        mongoose.connect(DB); // Connect without deprecated options
        console.log("connected to database successfully");
    } catch (error) {
        console.error('Error connecting to database:', error);
        console.log("Could not connect to database");
    }
};
