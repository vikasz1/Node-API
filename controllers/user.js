const User = require("../models/user");

async function handleGetAllUsers(req, res) {
  const allDBUsers = await User.find();
  res.json(allDBUsers);
}
async function handlePostUser(req, res) {
  const body = req.body;
  if (
    !body ||
    !body.firstName ||
    !body.lastName ||
    !body.email ||
    !body.gender ||
    !body.job_title
  ) { 
    return res.status(400).json({ msg: "All fields required" });
  }
    const result = await User.create({
      firstName: body.firstName,
      lastName: body.lastName,
      email: body.email,
      gender: body.gender,
      jobTitle: body.job_title,
    });
  console.log(result)
  return res.status(201).json({ msg: "Success" });
}

module.exports = { handleGetAllUsers,handlePostUser };
