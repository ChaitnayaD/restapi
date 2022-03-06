const express = require("express");
const router = express.Router();
const Ninja = require("../models/ninja");
//get a list of Ninjas
router.get("/ninjas", (req, res) => {
  res.send({ type: "GET" });
});
//add a list of Ninjas
router.post("/ninjas", (req, res, next) => {
  Ninja.create(req.body)
    .then((ninja) => {
      res.send(ninja);
    })
    .catch(next);
});
//put a list of Ninjas
router.put("/ninjas/:id", (req, res, next) => {
  res.send({ type: "PUT" });
});
//delete a list of Ninjas
router.delete("/ninjas/:id", (req, res, next) => {
  res.send({ type: "DELETE" });
});

module.exports = router;
