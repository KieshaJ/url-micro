import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import helmet from 'helmet';
import dotenv from 'dotenv';

dotenv.config();

// import * as ErrorHandler from "./errorHandler";
import Routes from './routes';

const server = express();
const port = process.env.PORT || 3000;

server.use(helmet());
server.use(morgan('tiny', null));
server.use(cors());
server.use(express.json());

Routes(server);

// server.use(ErrorHandler);

server.listen(port, () => {
    // console.log(`Listening at http://localhost:${port}`);
});