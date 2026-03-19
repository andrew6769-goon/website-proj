const express = require("express");
const fs = require("fs");

const app = express();
const PORT = 3000;

const ADMIN_PASSWORD = "HELLO123"; // change if you want

app.use(express.json());
app.use(express.static("public"));

// Send message
app.post("/send", (req, res) => {
  const message = req.body.message;

  if (!message) return res.sendStatus(400);

  const log = `[${new Date().toLocaleString()}] ${message}\n`;

  fs.appendFile("messages.txt", log, (err) => {
    if (err) return res.sendStatus(500);
    res.sendStatus(200);
  });
});

// Get messages (admin)
app.post("/messages", (req, res) => {
  const password = req.body.password;

  if (password !== ADMIN_PASSWORD) {
    return res.status(403).send("Wrong password");
  }

  fs.readFile("messages.txt", "utf8", (err, data) => {
    if (err) return res.sendStatus(500);
    res.send(data);
  });
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});