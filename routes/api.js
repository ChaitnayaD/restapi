const express = require("express");
const router = express.Router();
const Ninja = require("../models/ninja");
//get a list of Ninjas
router.get("/ninjas", (req, res, next) => {
  Ninja.aggregate([
    {
      $geoNear: {
        near: {
          type: "Point",
          coordinates: [parseFloat(req.query.lng), parseFloat(req.query.lat)],
        },
        distanceField: "dist.calculated",
        maxDistance: 100000,
        spherical: true,
      },
    },
  ])
    .then((ninjas) => {
      res.send(ninjas);
    })
    .catch((err) => {
      res.send(next);
    });
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
  Ninja.findByIdAndUpdate({ _id: req.params.id }, req.body).then(() => {
    Ninja.findOne({ _id: req.params.id }).then((ninja) => {
      res.send(ninja);
    });
  });
});
//delete a list of Ninjas
router.delete("/ninjas/:id", (req, res, next) => {
  Ninja.findByIdAndRemove({ _id: req.params.id }).then((ninja) => {
    res.send(ninja);
  });
  res.send({ type: "DELETE" });
});

module.exports = router;
