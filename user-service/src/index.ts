import express from "express";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const server = express();
const PORT = process.env.PORT || 10010;

server.use(cors());
server.use(express.json());

server.listen(PORT, () => "Server started successfully");