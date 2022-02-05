import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import UrlRoutes from "./routes/UrlRoutes";

dotenv.config();

const server = express();
const PORT = process.env.PORT || 10020;

server.use(cors());
server.use(express.json());

server.use(UrlRoutes);

server.listen(PORT, () => {});