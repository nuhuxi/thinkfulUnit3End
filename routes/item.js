/**
 * Created by mark07 on 6/3/15.
 */
var express = require('express');
var Item = require('../services/item');
var router = express.Router();

router.get('/items', function(req, res) {
  console.log("Getting items");
  Item.list(function(items) {
    res.json(items);
  }, function(err) {
    res.status(400).json(err);
  });
});

router.post('/items', function(req, res) {
  console.log("Posting an item");
  Item.save(req.body.name, function(item) {
    res.status(201).json(item);
  }, function(err) {
    res.status(400).json(err);
  });
});

router.delete('/items/:id', function(req, res) {
  Item.delete(req.params.id, function(id) {
    res.status(201).json(id);
  }, function(err) {
    res.status(201).json(err);
  });
});

router.put('/items/:id', function(req, res) {
  console.log("Made it to the put route.");
  console.log("Update this id: " + req.body.id);
  console.log("Here is the new name: " + req.body.name);
  /*
  Item.edit(req.params.id, function(err, id) {
    res.status(201).json(id);
  }, function(err) {
    res.status(201).json(err);
  });*/
});

module.exports = router;