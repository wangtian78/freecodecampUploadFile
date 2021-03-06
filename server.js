'use strict';

var express = require('express');
var cors = require('cors');

// require and use "multer"...
var multer  = require('multer');
var upload = multer({ dest: 'uploads/' });
var app = express();

app.use(cors());
app.use('/public', express.static(process.cwd() + '/public'));

app.get('/', function (req, res) {
     res.sendFile(process.cwd() + '/views/index.html');
  });

app.get('/hello', function(req, res){
  res.json({greetings: "Hello, API"});
});
app.route('/api/fileanalyse').post(upload.single('upfile'),function(req,res){
  let receiveFile = req.file;//console.log to see what is in receiveFile
  res.json({name: receiveFile.originalname, type: receiveFile.mimetype, size: receiveFile.size});
});
app.listen(process.env.PORT || 3000, function () {
  console.log('Node.js listening ...');
});
