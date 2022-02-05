import dotenv from "dotenv";
import {Request, Response} from "express";

dotenv.config();

const listTopUrls = (req: Request, res: Response) => {};

const getUrl = async (req: Request, res: Response) => {
    const {slug} = req.params;
    try {

    } catch (error) {

    }

    res.json(slug);
}

const createUrl = async (req: Request, res: Response) => {};

export default {
    listTopUrls,
    getUrl,
    createUrl
};