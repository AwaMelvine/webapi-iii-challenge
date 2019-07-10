const express = require("express");

const router = express.Router();
const User = require("./userDb");
const Post = require("../posts/postDb");
const { validateUserId, validateUser, validatePost } = require("../middleware");

router.post("/", validateUser, async (req, res) => {
  try {
    const { body } = req;
    const user = await User.insert(body);
    res.status(201).json({ user });
  } catch (error) {
    res.status(500).json({ error: "Failed to create user" });
  }
});

router.post("/:id/posts", validatePost, async (req, res) => {
  try {
    const { id } = req.params;
    const { body } = req;
    const post = await Post.insert({ ...body, user_id: id });
    res.status(201).json({ post });
  } catch (error) {
    res.status(500).json({ message: "Failed to create post" });
  }
});

router.get("/", (req, res) => {});

router.get("/:id", (req, res) => {});

router.get("/:id/posts", (req, res) => {});

router.delete("/:id", (req, res) => {});

router.put("/:id", (req, res) => {});

module.exports = router;
