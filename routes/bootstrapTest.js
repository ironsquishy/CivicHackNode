var express = require('express');
var router = express.Router();

//about route
router.get('/', function(req, res, next) {
  res.render('about', { title: 'Express' });
});

module.exports = router;
