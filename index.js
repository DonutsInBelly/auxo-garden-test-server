var express = require('express');

var app = express();

app.get('/', (req, res)=>{
  res.send('ayy lmaoo');
});



app.listen(8080 || process.env.PORT);
