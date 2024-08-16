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
app.use(cors({
    origin: 'http://localhost:5173', // Replace with the URL of your frontend
    methods: ['GET', 'POST', 'PUT', 'DELETE'], // Specify allowed methods
    credentials: true, // Allow credentials like cookies or HTTP authentication
  }));
//routes
app.use("/api/users",userRoutes);
app.use("/api/auth",authRoutes);

app.post('/api/auth/signup', (req, res) => {
    res.status(200).json({ message: 'Signup endpoint hit!' });
  });
  

const port = process.env.PORT||3000;
app.listen(port,() => console.log(`Listening on port ${port}...`));