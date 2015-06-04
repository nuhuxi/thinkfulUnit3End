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
  var deleteThisID = req.params.id;
  console.log("Deleting item: " + deleteThisID);
  Item.delete(deleteThisID, function(){

  });
});

module.exports = router;