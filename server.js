const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

let latestMessage = "No messages yet"; // memory me store hoga

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

// Sender se message lena
app.post("/send", (req, res) => {
  latestMessage = req.body.message || "Empty message";
  res.send("✅ Message sent successfully!");
});

// Receiver ko latest message dena
app.get("/receive", (req, res) => {
  res.send(latestMessage);
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
