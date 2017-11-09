//
// # SimpleServer
//
// A simple chat server using Socket.IO, Express, and Async.
//
var http = require('http');
var path = require('path');

var express = require('express');

var cors = require('cors');
//配置信息
var config = require('./config');

var url = require('url');
var bodyParser  = require('body-parser'); 


var app = express();
var server = http.createServer(app);
// support encoded bodies
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());

// app.use(express.static(path.resolve(__dirname, 'public')));

// error handler
if (config.debug) {
  console.log('config.debug');
} else {
  app.use(function (err, req, res, next) {
    if(err) {
      console.log('middleware error handler cut ');
      logger.error(err);
      return res.status(500).send('500 status');
    }else {
      console.log('hehe ');
      next();
    }
  });
}

// 在路由之后执行
app.use(function(req, res, next) {
  console.log('路由之后...' + req.path);
  console.log('ip:' + req.ip);
  next();
});


// routes 跨域 
var apiRouter = require('./api_router');
app.use('/api', cors(), apiRouter);


server.listen(process.env.PORT || config.port, process.env.IP || "0.0.0.0", function(){
  console.log('service is start', '');
});


module.exports = app;