var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/:twiddleName', function(req, res, next) {
  const { twiddleName } = req.params();
  res.render('twiddle', { name: 'Express' });
});

module.exports = router;
