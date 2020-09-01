import * as Controller from './controller';

export default (app) => {
    app.get('/url/:slug', Controller.getUrl);
    app.post('/url', Controller.createUrl);
    app.get('/url', Controller.listTopUrls);
};