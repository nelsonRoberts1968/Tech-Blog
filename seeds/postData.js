const { Post } = require('../models');

const postdata =
[
  {
    "postTitle": "Best Tech Blogs in Sacramento",
    "postContent": "Scaramento is an upcoming Tech Arena...Soon we will be the new Silicon Valley",
    "userId": 1
  },
  {
    "postTitle": "FullStack Developers",
    "postContent": "Before you know it, United States President will be a Fullstack Developer.",
    "userId": 2
  },
  {
    "postTitle": "Tech Bootcamps vs Computer Science Graduates",
    "postContent": "Tech Boot Camps wins: they provide hands on expereince of professional development",
    "userId": 3
  },

  {
    "postTitle": "MERN Tech Stack",
    "postContent": "MERN tech stack standsout above any other tech stack",
    "userId": 4
  }
];

const seedPost = () => Post.bulkCreate(postdata);

module.exports = seedPost;