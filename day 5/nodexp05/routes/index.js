var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* GET about us page. */
router.get('/aboutus', function(req, res, next) {
  res.render('aboutus', { title: 'aboutus' });
});

/* GET users listing. */
router.get('/users', function(req, res, next) {
  res.send('respond with a resource');
});
module.exports = router;
