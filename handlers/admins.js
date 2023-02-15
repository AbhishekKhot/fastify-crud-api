const admins = require("../cloud/admins.js");
const jwt = require("jsonwebtoken");

const getAdminTestHandler = (req, reply) => {
  reply.send("This is admin route");
};

const getAdminHandler = (req, reply) => {
  reply.send(admins);
};

const registerAdminHanlder = (req, reply) => {
  const { username, email, password } = req.body;
  const id = admins.length + 1;

  admins.push({ username, email, password });
  reply.send("Account created successfully!!");
};

const loginAdminHanlder = async (req, reply) => {
  const { username, password } = req.body;
  const admin = admins.find((admin) => admin.username === username);
  if (!admin) {
    return reply.send("Invalid username or password");
  }
  if (admin.password !== password) {
    return reply.send("Invalid username or password");
  }
  try {
    jwt.sign(
      { id: admin.username },
      "my_jwt_secret",
      { expiresIn: 3 * 86400 },
      (err, token) => {
        if (err) throw err;

        reply.send({ token });
      }
    );
    await reply;
  } catch (error) {
    console.log(error);
    reply.send(500).send("Server error");
  }
};

module.exports = {
  getAdminTestHandler,
  getAdminHandler,
  loginAdminHanlder,
  registerAdminHanlder,
};
