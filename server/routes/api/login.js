const express = require("express");
const router = express.Router();

router.post("/", (req, res) => {
  res.send("login sucessful");
});

module.exports = router;
