const express = require('express');
const router = express.Router();

const responseBase = {
  title: 'CSS Twiddles',
};

const twiddleList = {
  first: { name: "First" }
};
const allTwiddles = Object.entries(twiddleList).map(([key, val]) => { return { slug: key, ...val } });
console.log(allTwiddles);

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { ...responseBase, allTwiddles });
});

router.get('/:twiddleName', function(req, res, next) {
  const { twiddleName } = req.params;
  const twiddleConfig = twiddleList[twiddleName];

  if (!twiddleConfig) {
    res.status(404);
    next();
  } else {
    res.render(
      twiddleConfig.view || 'twiddle',
      {
        ...responseBase,
        twiddle: twiddleName,
        twiddleName: twiddleConfig.name || twiddleName,
        allTwiddles,
        layout: 'twiddle-layout'
      }
    );
  }

});

module.exports = router;
