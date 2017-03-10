
/*
 * GET users listing.
 */
var userService = require("../services/UserService");

exports.list = function(req, res){
  var users = userService.getAllUsers();
  res.send(users);
};