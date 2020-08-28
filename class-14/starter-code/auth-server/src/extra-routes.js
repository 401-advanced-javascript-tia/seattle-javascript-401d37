'use strict';

const express = require('express');
const bearerAuthMiddleware = require('./auth/middleware/bearer-auth');
const router = express.Router();

/* Lab 14 - replace /secret route with public, private and  CRUD routes */
router.get('/secret', bearerAuthMiddleware, (req,res) => {
  res.status(200).send('access allowed');
} );

module.exports = router;
