const express = require("express");
const app = express();

app.use(express.json());

// Home API
app.get("/", (req, res) => {
  res.send("My Blog Backend Server is Running!");
});

// Blogs API
app.get("/blogs", (req, res) => {
  res.json([
    {
      id: 1,
      title: "My First Blog",
      content: "Welcome to my blog website!"
    },
    {
      id: 2,
      title: "My Second Blog",
      content: "This is my second blog post."
    }
  ]);
});

// Add New Blog API
app.post("/blogs", (req, res) => {
  res.json({
    message: "Blog added successfully!",
    blog: req.body
  });
});

// Start Server
app.listen(3000, () => {
  console.log("Server running on port 3000");
});
