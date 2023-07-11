const express = require('express');
const dotenv = require('dotenv').config();
const logger = require('node-color-log');
const { info } = logger
// const { info, warn } = require('./utils/Logger.js');
const app = express();
const port = process.env.PORT || 3000;

app.listen(port, () => {
    logger.success(`Server running on ${port}`)
})
