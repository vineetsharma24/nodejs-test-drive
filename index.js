const express = require("express");
const app = express();
const bodyParser = require("body-parser");

// Middleware to parse JSON request bodies
app.use(bodyParser.urlencoded({ extended: false }));

// Serve the index.html file as the homepage
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

// Route to handle authentication
app.post("/login", (req, res) => {
  const { username, password } = req.body;

  // Retrieve the username and password from app settings
  const appUsername = process.env.USERNAME;
  const appPassword = process.env.PASSWORD;

  // Validate the username and password
  if (username === appUsername && password === appPassword) {
    res.send("Authentication successful");
  } else {
    res.status(401).send("Invalid username or password");
  }
});

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
