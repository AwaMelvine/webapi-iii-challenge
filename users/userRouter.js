const express = require("express");

const router = express.Router();
const User = require("./userDb");
const { validateUserId, validateUser } = require("../middleware");

router.post("/", validateUser, async (req, res) => {
  try {
    const { body } = req;
    const user = await User.insert(body);
    res.status(201).json({ user });
  } catch (error) {
    res.status(500).json({ error: "Failed to create user" });
  }
});

router.post("/:id/posts", (req, res) => {});

router.get("/", (req, res) => {});

router.get("/:id", (req, res) => {});

router.get("/:id/posts", (req, res) => {});

router.delete("/:id", (req, res) => {});

router.put("/:id", (req, res) => {});

//custom middleware

function validateUserId(req, res, next) {}

function validateUser(req, res, next) {}

function validatePost(req, res, next) {}

module.exports = router;
