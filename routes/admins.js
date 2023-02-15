const {
  getAdminTestSchema,
  getAdminSchema,
  registerAdminSchema,
  loginAdminSchema,
} = require("../schemas/admins.js");

const {
  getAdminTestHandler,
  getAdminHandler,
  loginAdminHanlder,
  registerAdminHanlder,
} = require("../handlers/admins.js");

const getAdminTestOpts = {
  schema: getAdminTestSchema,
  handler: getAdminTestHandler,
};

const getAdminOpts = {
  schema: getAdminSchema,
  handler: getAdminHandler,
};

const loginAdminOpts = {
  schema: loginAdminSchema,
  handler: loginAdminHanlder,
};

const registerAdminOpts = {
  schema: registerAdminSchema,
  handler: registerAdminHanlder,
};

const adminRoute = (fastify, opt, done) => {
  fastify.get("/api/admin/test", getAdminTestOpts);
  fastify.get("/api/admins", getAdminOpts);
  fastify.post("/api/admins/new", registerAdminOpts);
  fastify.post("/api/admins/login", loginAdminOpts);
  done();
};

module.exports = adminRoute;
