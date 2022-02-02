import {
    NextFunction,
    Request,
    Response
} from "express";

module.exports = (error: any, req: Request, res: Response) => {
    res.status(error.status ? error.status : 500).json({
        message: error.message.startsWith('E11000') ? 'Slug is already in use!' : error.message,
        stack: process.env.NODE_ENV === 'production' ? '' : error.stack
    });
};