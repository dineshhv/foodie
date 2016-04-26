var express = require('express'),
  router = express.Router(),
  mongoose = require('mongoose'),
  Article = mongoose.model('Article');

module.exports = function (app) {
  app.use('/', router);
};

router.get('/', function (req, res, next) {
  Article.find(function (err, articles) {
    console.log(articles)
    if (err) return next(err);
    res.send(articles)
  });
});

// define the about route
router.get('/home', function(req, res,next) {
  res.send('home birds');
});