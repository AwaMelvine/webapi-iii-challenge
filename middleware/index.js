const Post = require("../posts/postDb");

module.exports = {
  logger(req, res, next) {
    req.timestamp = Date.now();
    console.log({ method: req.method, url: req.url, timestamp: req.timestamp });
    next();
  },

  validateUserId(req, res, next) {
    const id = Number.parseInt(req.params.id, 10);
    if (Number.isInteger(id)) {
      const user = {}; // find user by id from db
      if (user) {
        // save user as req.user
        // next();
      } else {
        res.status(400).json({ message: "invalid user id" });
      }
    } else {
    }
  },

  validateUser(req, res, next) {
    if (!req.body) {
      return res.status(400).json({ message: "missing user data" });
    }
    if (!req.body.name) {
      return res.status(400).json({ message: "missing required name field" });
    }
  },

  async validatePostId(req, res, next) {
    try {
      const id = Number.parseInt(req.params.id, 10);
      if (Number.isInteger(id)) {
        const post = await Post.getById(id);
        if (post) {
          req.post = post;
          next();
        } else {
          res.status(400).json({ message: "invalid post id" });
        }
      } else {
      }
    } catch (error) {
      res.status(500).json({ error: "uh oh, there was a problem" });
    }
  },

  validatePost(req, res, next) {
    if (!req.body) {
      return res.status(400).json({ message: "missing post data" });
    }
    if (!req.body.text) {
      return res.status(400).json({ message: "missing required text field" });
    }
    next();
  }
};
