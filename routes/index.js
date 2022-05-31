const express = require('express');
const router = express.Router();

const controller = require('../controllers/controller')

module.exports = function () {
    router.get('/', controller.Home);
    return router;
}