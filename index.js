const express = require("express");
const app = express();

// Route for homepage
app.get("/", (req, res) => {
    res.send("Hello, world! This is my first back-end server.");
});

// Route for /about
app.get("/about", (req, res) => {
    res.send("This is the about page.");
});

app.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});
