var express = require('express');
var router = express.Router();


router.get('/', async (req, res) => {
  res.render('index', { title: 'LMVW', home : "1" });
});

module.exports = router;
