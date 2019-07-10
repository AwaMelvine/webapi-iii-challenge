const express = require("express");
const { logger } = require("./middleware");
const postRouter = require("./posts/postRouter");
const app = express();

app.use(express.json());
app.use(logger);

app.use("/api/posts", postRouter);

app.listen(5000, () => console.log("Server running at localhost:5000"));
