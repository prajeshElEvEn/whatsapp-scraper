const mongoose = require('mongoose');
const logger = require('node-color-log');

const connectToDatabase = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        // console.log(conn);
        logger.success(`Connected to database`)
    } catch (err) {
        logger.error(err)
        process.exit(1)
    }
}

module.exports = connectToDatabase

