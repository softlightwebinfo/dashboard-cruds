import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();
const {
    MONGO_USERNAME,
    MONGO_PASSWORD,
    MONGO_HOSTNAME,
    MONGO_PORT,
    MONGO_DB
} = process.env;
let url = `mongodb://${MONGO_USERNAME}:${MONGO_PASSWORD}@${MONGO_HOSTNAME}:${MONGO_PORT}/${MONGO_DB}`;
url = `mongodb://localhost:${MONGO_PORT}/dashboard`;

mongoose.connect(url, {useNewUrlParser: true, useUnifiedTopology: true})
mongoose.Promise = global.Promise;
let db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));