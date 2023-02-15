const {
  getTestSchema,
  getPostsSchema,
  getPostSchema,
  addPostSchema,
  updatePostSchema,
  deletePostSchema,
} = require('../schemas/posts.js');

const {
  getTestHandler,
  getPostsHandler,
  getPostHandler,
  addPostHandler,
  updatePostHandler,
  deletePostHandler,
} = require('../handlers/posts.js');

const getTestOpts = {
  schema: getTestSchema,
  handler: getTestHandler,
}
const getPostsOpts = {
  schema: getPostsSchema,
  handler: getPostsHandler,
};

const getPostOpts = {
  schema: getPostSchema,
  handler: getPostHandler,
};

const addPostOpts = {
  schema: addPostSchema,
  handler: addPostHandler,
};

const updatePostOpts = {
  schema: updatePostSchema,
  handler: updatePostHandler,
};

const deletePostOpts = {
  schema: deletePostSchema,
  handler: deletePostHandler,
};

const postRoutes = (fastify, opts, done) => {
  //testing route 
  fastify.get('/test', getTestOpts)
  // get all posts
  fastify.get('/api/posts', getPostsOpts);

  // get a post with given id
  fastify.get('/api/posts/:id', getPostOpts);

  // create a new post
  fastify.post('/api/posts/new', addPostOpts);

  // update a post with given id
  fastify.put('/api/posts/edit/:id', updatePostOpts);

  // delete a post with given id
  fastify.delete('/api/posts/:id', deletePostOpts);

  done();
};

module.exports = postRoutes;
