const express = require('express');
const app     = express();
const router  = require('./router');

app.use(express.json());

app.use('/',router);

app.listen(3002,() => console.log('serve on'));