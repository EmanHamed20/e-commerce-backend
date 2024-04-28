const cors = require("cors");
const express = require("express");
const mongoose = require("mongoose");
const userRoutes = require('./routes/userRoute');

const app = express();
const port = 4000;

// Middleware
app.use(cors());
app.use(express.json()); // Parse JSON bodies
app.use("/user", userRoutes); // User routes

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

// Database connection
mongoose.connect('mongodb+srv://emanhamed270:oGSfaJ3soEPfHgUK@cluster0.zye2ged.mongodb.net/Esty', {

})
.then(() => {
  console.log("Connected to MongoDB");
  // Start the server
  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
})
.catch(err => {
  console.error("Error connecting to MongoDB:", err);
});
