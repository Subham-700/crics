require('dotenv').config();
const express =require('express');
const app = express();
const cors = require("cors");
const connection = require("./db");
const userRoutes = require("./routes/user.routes");
const authRoutes = require("./routes/auth.routes");


//database
connection();

//middleware
app.use(express.json())
app.use(cors());

//routes
app.use("/api/users",userRoutes);
app.use("/api/auth",authRoutes);

const port = process.env.PORT||3000;
app.listen(port,() => console.log(`Listening on port ${port}...`));