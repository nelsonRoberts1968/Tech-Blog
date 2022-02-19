const router = require('express').Router();
const { Post } = require('../../models/');
const withAuth = require('../../utils/auth');

// Create a new post
router.post('/', withAuth, async (req, res) => {
  const body = req.body;
    console.log(body);
  try {
    const newPost = await Post.create({ ...body, userId: req.session.userId });
    console.log("New Post Created ",  newPost);
    res.json(newPost);
     } catch (err) {
       console.log('post create failed', err);
    res.status(500).json(err);
  }
});

// update an existing post using id
router.put('/:id', withAuth, async (req, res) => {
  try {
    console.log('here is the req.body', req.body);
    const [affectedRows] = await Post.update(req.body, {
      where: {
        id: req.params.id,
      },
    });

    if (affectedRows > 0) {
      res.status(200).end();
    } else {
      res.status(404).end();
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

// DELETE POST
router.delete('/:id', withAuth, async (req, res) => {
  try {
    const [affectedRows] = Post.destroy({
      where: {
        id: req.params.id,
      },
    });

    if (affectedRows > 0) {
      res.status(200).end();
    } else {
      res.status(404).end();
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;