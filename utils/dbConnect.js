const mongoose = require("mongoose");
mongoose.connect(
  process.env.DB_CONNECTION,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => {
    console.log("Connected to DB!");
  }
);

mongoose.connection.on('error', console.error.bind(console, 'MongoDB connection error:'));

