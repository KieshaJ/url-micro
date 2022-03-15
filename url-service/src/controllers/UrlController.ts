import dotenv from "dotenv";
import {Request, Response} from "express";
import UrlModel from "../models/UrlModel";

dotenv.config();

const listTopUrls = async (req: Request, res: Response): Promise<void> => {
    try {
        const list = await UrlModel.find();
        res.status(200).json(list);
    } catch (error: unknown) {
        if (error instanceof Error) {
            res.status(500).json({
                message: error.message
            });
        }
    }
};

const getUrl = async (req: Request, res: Response): Promise<void> => {
    const {slug} = req ? req.params : null;
    try {
        const list = await UrlModel.find();
        res.status(200).json(list);
    } catch (error: unknown) {
        if (error instanceof Error) {
            res.status(404).json({
                message: error.message
            });
        }
    }

    res.json(slug);
}

const createUrl = async (req: Request, res: Response): Promise<void> => {
    const urlData = new UrlModel(req.body);

    try {
        const savedUrl = await urlData.save();
        res.status(200).json(savedUrl);
    } catch (error: unknown) {
        if (error instanceof Error) {
            res.status(400).json({
                message: error.message
            });
        }
    }
};

export default {
    listTopUrls,
    getUrl,
    createUrl
};