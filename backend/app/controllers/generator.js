var express = require('express'),
  router = express.Router(),
  mongoose = require('mongoose'),
  dineTablesSchema = mongoose.model('dineTables');
var url = require('url');

module.exports = function (app,root) {
  // app.use('/', router);
  app.use('/generator/', router);
  app.use('/generator/qr', router);
  app.use('/generator/about', router);
};

router.get('/', function (req, res, next) {
  dineTablesSchema.find(function (err, dineTablesSchema) {
    if (err) return next(err);
    res.send(dineTablesSchema)
  });
});

router.get('/qr', function (req, res, next) {

  res.set('Content-Type', 'application/json');
  dineTablesSchema.find(function (err, dineTablesSchema) {
    if (err) return next(err);
    var requrl = url.format({
        protocol: req.protocol,
        host: req.get('host'),
    });

    var i;
    var QRList = [];
    for(i=0;i<dineTablesSchema[0].dineTables;i++){
      var qrcode = req.qrcode();
      qrcode.setDimension(120,120);
      qrcode.setCharset('UTF-8');
      qrcode.setCharset('UTF-8');
      qrcode.setCorrectionLevel('L',0);
      var data = {
        "menuUrl": requrl+"/menuDetails/"+(i+1),
        "orderUrl":requrl+"/submitOrder/"+(i+1)
      }
      qrcode.setData(JSON.stringify(data));
      var image = qrcode.getImage();
      var temp = {}
      temp.dineTable = i;
      temp.id = i;
      temp.imageUrl = image;
      QRList.push(temp)
    }
    res.send(JSON.stringify(QRList))
  });
});

// define the about route
router.get('/about', function(req, res) {
   var qrcode = req.qrcode();
    qrcode.setDimension(120,120);
    qrcode.setCharset('UTF-8');
    qrcode.setCharset('UTF-8');
    qrcode.setCorrectionLevel('L',0);
    var data = {
      "menuUrl": "http://server.com",
      "orderUrl":"http://orderul.com"
    }
    qrcode.setData(JSON.stringify(data));
    var image = qrcode.getImage();
  res.render('index', { title: 'Express',img:image });
  // res.send('generator/about');
});