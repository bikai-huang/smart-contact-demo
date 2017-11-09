/**
 * config
 */
var path = require('path');

var config = {
  // debug 为 true 时，用于本地调试
  debug: false,

  // 程序运行的端口
  port: 3000,
  
  
};

if (process.env.NODE_ENV === 'test') {

}

module.exports = config;
