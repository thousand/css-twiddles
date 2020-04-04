const express = require('express');
const router = express.Router();

const responseBase = {
  title: 'CSS Twiddles',
};

function responseParams(obj) {
  return Object.assign({}, responseBase, obj);
}

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', responseParams({}));
});

router.get('/:twiddleName', function(req, res, next) {
  const { twiddleName } = req.params;
  res.render('twiddle', responseParams({ twiddleName, layout: 'twiddle-layout' }));
});

module.exports = router;
