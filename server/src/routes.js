import * as Controller from './controller';

export default (app) => {
    app.get('/:slug', Controller.getUrl);
    app.post('/url', Controller.createUrl);
};