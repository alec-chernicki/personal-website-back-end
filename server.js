'use strict';
const express = require('express')
var bodyParser = require('body-parser');

/**
 * Create Express server
 */
var app = express();

/**
 * Express configuration
 */
app.set('port', process.env.PORT || 3001);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

/**
 * Controllers
 */
var emailController = require('./controllers/emailController.js');

/**
 * Routes
 */
app.post('/email', emailController.post);

module.exports = app;
