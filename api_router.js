var express = require('express');
var router = express.Router();

var config = require('./config');

router.get("/", function(req, res) {
  res.send("this is wrong way.");
});

var contact = require("./api/contact");

router.get('/addContact/', contact.createContact);


module.exports = router;