require("dotenv/config"); 
const express = require('express'); 
const app = express(); 
const cors = require('cors'); 
require('./utils/dbConnect'); 
app.use(require('body-parser').json()); 

//Import routes
const usersRoute = require("./routes/user"); 
const exerciseRoute = require('./routes/exercise'); 

//Middleware 
app.use(cors()); 
app.use("/users", usersRoute);
app.use('/exercises', exerciseRoute); 
//ROUTES 
app.get('/', (req, res) => {
    res.send("Hello World!");
})

app.listen(process.env.PORT, () => console.log("server started on port " + process.env.PORT)); 

