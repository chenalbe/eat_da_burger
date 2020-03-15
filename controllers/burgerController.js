var express = require("express");

var router = express.Router();

var burger = require("../models/burger.js");

router.get("/", function(req, res) {
  burger.all(function(data) {
    var hbsObject = {
      burger: data
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

router.post("/api/burger", function(req, res) {
  burger.create(["name", "eaten"], [req.body.name, req.body.eaten], function(result) {
    res.json({ id: result.insertId });
  });
});

router.put("/burger/:id", function(request, res){
  var condition = "id = " + request.params.id;
  burger.update(condition, function(result) {
      console.log(result);
      res.sendStatus(200);
  });
});

router.delete("/api/burger/:id", function(req, res){
  var condition = req.params.id;
  burger.delete(condition, function(){
      res.status(202).end();
  });
});

// Export routes for server.js to use.
module.exports = router;
