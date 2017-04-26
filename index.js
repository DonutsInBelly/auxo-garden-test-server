var express = require('express');
var morgan = require('morgan');

var app = express();

app.use(morgan('dev'));

app.get('/', (req, res)=>{
  res.send('ayy lmaoo');
});

app.post('/', (req, res)=>{
  console.log(req.body);
  res.send('Request Received');
});

app.listen(process.env.PORT || 8080);
