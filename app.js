var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var redis = require('redis');

var usersRouter = require('./routes/users');

var app = express();

(async () => {
    const client = redis.createClient({
        url: 'redis://@redisdb:6379'
      });
  
    client.on('error', (err) => console.log('Redis Client Error', err));
  
    await client.connect();
  
    await client.set('key', 'value');
    const value = await client.get('key');

    app.set('db', client);
    app.use('/users', usersRouter);
  })();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

module.exports = app;
