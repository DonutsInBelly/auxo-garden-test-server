var express = require('express');
var morgan = require('morgan');
var bodyParser = require('body-parser');

var app = express();

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res)=>{
  res.send('ayy lmaoo');
});

app.post('/', (req, res)=>{
  console.log(req.body.data);
  res.send('Request Received');
});

app.listen(process.env.PORT || 8080);
