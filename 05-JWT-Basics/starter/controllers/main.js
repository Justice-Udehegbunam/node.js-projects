const CustomAPIError = require("../errors/custom-error");
const jwt = require("jsonwebtoken");

const login = async (req, res) => {
  const { username, password } = req.body;
  /* Three ways to perform checks if user sends in empty values 
1. using mongoose validations that does it automatically
2. using JOI
3. Check by urself in the controller */

  if (!username || !password) {
    throw new CustomAPIError("Please provide the username and password", 400);
  }
  const _id = new Date().getDate();
  // note u dont want to send a password here normally u send back the id of the user, amd when it comes to payloads "sign({_id," this first ppart it will be ok  to keep them small because the bigger the payload u are sending the slower the app will perform
  const token = jwt.sign({ _id, username }, process.env.JWT_SECRET, {
    expiresIn: "30d",
  });

  // note the "user created" is very useful so u are advised to keep it same
  res.status(200).json({ msg: "user created", token });
};

const dashboard = async (req, res) => {
  console.log(req.headers);
  const luckyNumber = Math.floor(Math.random() * 100);

  res.status(200).json({
    msg: `Hello Justice`,
    secret: `Here is your authorized data, your lucky number is ${luckyNumber}`,
  });
};

module.exports = { login, dashboard };
