console.log('starting 311...');

const fs = require('fs');
const os = require('os');
const _ = require('lodash');
const notes = require('./notes.js');

console.log(_.isString(true));
console.log(_.isString("Adam"));

var set = _.uniq(['Adam', 1, 'Adam', 1, 2, 3, 4, "monkey"]);
console.log(set);
