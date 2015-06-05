/**
 * Created by mark07 on 6/3/15.
 */

var Item = require('../models/item');

exports.save = function(name, callback, errback) {
  Item.create({ name: name }, function(err, item) {
    if (err) {
      errback(err);
      return;
    }
    callback(item);
  });
};

exports.list = function(callback, errback) {
  Item.find(function(err, items) {
    if (err) {
      errback(err);
      return;
    }
    callback(items);
  });
};

exports.delete = function(id, callback, errback) {
  console.log("Deleting item: " + id);
  Item.findOneAndRemove(id, function (err, id) {
    console.log("made it into exports delete");
    if (err) {
      errback(err);
      return;
    }
    callback(id);
  });
};

exports.put = function(name, callback, errback) {
  console.log("Made it into item put");
  Item.findOneAndUpdate(function(err, items) {
    console.log("made it into findOneAndUpdate delete");
    if (err) {
      errback(err);
      return;
    }
    callback(id);
  });

};