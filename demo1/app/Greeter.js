var config = require('./config.json');
var vue = require('./vue.vue');
module.exports = function() {
  var greet = document.createElement('div');
  var Vue = document.createElement('div');
  greet.textContent = config.greetText;
  return greet;
};