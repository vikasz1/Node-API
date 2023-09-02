const express = require("express");
const User = require("../models/user.js");
const router = express.Router();

const { handleGetAllUsers, handlePostUser } = require("../controllers/user.js");

//routes (for browser)
router.get("/users", async (req, res) => {
  const allDBUsers = await User.find();
  const html = `
    <ul>
    ${allDBUsers
      .map((user) => `<li>${user.firstName} - ${user.lastName}</li>`)
      .join("")}
    </ul>
    `;
  res.send(html);
});

router.route('/').get(handleGetAllUsers).post(handlePostUser)

// router.get("/", handleGetAllUsers);

// router.post("/", handlePostUser);

module.exports = router;
