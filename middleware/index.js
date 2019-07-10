module.exports = {
  logger(req, res, next) {
    req.timestamp = Date.now();
    console.log({ method: req.method, url: req.url, timestamp: req.timestamp });
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

  validatePost(req, res, next) {
    if (!req.body) {
      return res.status(400).json({ message: "missing post data" });
    }
    if (!req.body.text) {
      return res.status(400).json({ message: "missing required text field" });
    }
  }
};
