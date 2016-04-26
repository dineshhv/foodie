var express = require('express'),
  router = express.Router(),
  mongoose = require('mongoose'),
  dineTablesSchema = mongoose.model('dineTables');
var url = require('url');

module.exports = function (app,root) {
  // app.use('/', router);
  app.use('/menudetail/', router);
  app.use('/menudetail/:id', router);
};

router.get('/', function (req, res, next) {
  dineTablesSchema.find(function (err, dineTablesSchema) {
    if (err) return next(err);
    res.send(dineTablesSchema)
  });
});


// define the about route
router.get('/:id', function(req, res) {
  res.set('Content-Type', 'application/json');
  var menu = {
  "category1": {
    "item-1-id": {
      "name": "item1",
      "image": "http:/image/",
      "value": "5"
    },
    "item-2-id": {
      "name": "item2",
      "image": "http:/image/",
      "value": "10"
    }
  },
  "category2": {
    "item-1-id": {
      "name": "item1",
      "image": "http:/image/",
      "value": "15"
    },
    "item-2-id": {
      "name": "item2",
      "image": "http:/image/",
      "value": "10"
    }
  }
}
  res.send(JSON.stringify(menu));
  // res.send('generator/about');
});