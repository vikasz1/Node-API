const mongoose = require("mongoose");

async function startConnection(url) {
  mongoose
    .connect(url)
    .then(() => console.log("Connected to DB"))
    .catch((err) => console.log("Mongo Error:", err));
}

module.exports = { startConnection };
