var express = require('express');
var router = express.Router();

// middleware that is specific to this router
router.use(function timeLog(req, res, next) {
  console.log('Time: ', Date.now());
  next();
});
// define the home page route



router.get('/data',function(req,res){
    res.sendFile(__dirname+'/data/data.json');
})

router.get('/*', function(req, res) {
    res.sendFile('./app/index.html'); // load the single view file (angular will handle the page changes on the front-end)
});

router.post('/add', function(req, res) {
    console.log('HTTP/POST /add');
    console.log(req.body);

    var obj;
    fs.readFile(__dirname+'/data/data.json', 'utf8', function (err, data) {
      if (err) throw err;
      obj = JSON.parse(data);
      obj.data.push(req.body);
      var str = JSON.stringify(obj);
      fs.writeFile(__dirname+'/data/data.json', str, function (err) {
        if (err) throw err;
        console.log('Json Updated.');
      });

      res.status(200).send('OK');

    });

});



module.exports = router;


