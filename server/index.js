const express = require('express');
const dotenv = require('dotenv');
const logger = require('node-color-log');

dotenv.config()
const app = express();
const port = process.env.PORT || 3000;

app.listen(port, () => {
    logger.success(`Server running on ${port}`)
})
