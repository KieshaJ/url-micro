import dotenv from "dotenv";
import {Request, Response} from "express";
import UrlModel from "../models/UrlModel";

dotenv.config();

const listTopUrls = async (req: Request, res: Response) => {
    try {
        const list = await UrlModel.find();
        res.status(200).json(list);
    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
};

const getUrl = async (req: Request, res: Response) => {
    const {slug} = req.params;
    try {

    } catch (error) {

    }

    res.json(slug);
}

const createUrl = async (req: Request, res: Response) => {
    const urlData = new UrlModel({
        url: req.body.url,
        slug: req.body.slug
    });

    try {
        const savedUrl = await urlData.save();
        res.status(200).json(savedUrl);
    } catch (error) {
        res.status(400).json({
            message: error.message
        });
    }
};

export default {
    listTopUrls,
    getUrl,
    createUrl
};