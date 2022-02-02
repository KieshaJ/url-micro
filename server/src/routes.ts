import * as Controller from './controller';
import {Express} from "express";

export default (app: Express) => {
    app.get('/url/:slug', Controller.getUrl);
    app.post('/url', Controller.createUrl);
    app.get('/url', Controller.listTopUrls);
};