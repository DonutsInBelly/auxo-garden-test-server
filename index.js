var express = require('express');

var app = express();

app.get('/', (req, res)=>{
  res.send('ayy lmaoo');
});



app.listen(process.env.PORT || 8080);
