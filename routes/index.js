const express = require('express');
const router = express.Router();

// 예시 4~6번째 줄
// const postsRouter = require("./posts");
// router.use("/posts", [postsRouter]);

const usersRouter = require('./users.js');

router.use("/", [usersRouter]);

module.exports = router;