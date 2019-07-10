const express = require("express");
const { logger } = require("./middleware");
const app = express();

app.use(express.json());
app.use(logger);

app.get("/", (req, res, next) => {
  res.send({ message: "hi" });
});

app.listen(5000, () => console.log("Server running at localhost:5000"));
