/**
 * Created by mark07 on 6/3/15.
 */
var mongoose = require('mongoose');
var env = require('../environment');
var config = require('./config');

mongoose.connect(config[env].url);