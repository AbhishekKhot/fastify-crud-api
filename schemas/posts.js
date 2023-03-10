const typeString = { type: 'string' };

const post = {
  type: 'object',
  properties: {
    id: { type: 'number' },
    title: typeString,
    body: typeString,
  },
};

const getTestSchema = {
  response : {
    200:typeString,
  },
}

const getPostsSchema = {
  response: {
    200: {
      type: 'array',
      items: post,
    },
  },
};

const getPostSchema = {
  params: {
    id: { type: 'number' },
  },
  response: {
    200: post,
  },
};

const addPostSchema = {
  body: {
    type: 'object',
    required: ['title', 'body'],
    properties: {
      title: typeString,
      body: typeString,
    },
  },
  response: {
    200: typeString, // sending a simple message as string
  },
};

const updatePostSchema = {
  body: {
    type: 'object',
    required: ['title', 'body'],
    properties: {
      title: typeString,
      body: typeString,
    },
  },
  params: {
    id: { type: 'number' },
  },
  response: {
    200: typeString, // a simple message will be sent
  },
};

const deletePostSchema = {
  params: {
    id: { type: 'number' },
  },
  response: {
    200: typeString,
  },
};

module.exports = {
  getTestSchema,
  getPostsSchema,
  getPostSchema,
  addPostSchema,
  updatePostSchema,
  deletePostSchema,
};