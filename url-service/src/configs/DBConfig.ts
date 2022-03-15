import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const DB_URL = process.env.MONGODB_URL;
mongoose.Promise = global.Promise;
const db = {
    mongoose,
    url: DB_URL
};

export default db;