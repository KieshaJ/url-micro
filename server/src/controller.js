import monk from "monk";
import {nanoid} from "nanoid";
import * as yup from "yup";
import dotenv from "dotenv";

dotenv.config();

const db = monk(process.env.MONGODB_URI);
const urls = db.get('urls');
urls.createIndex({slug: 1}, {unique: true}).then();

const schema = yup.object().shape({
    slug: yup.string().trim().matches(/[\w\-]/i),
    url: yup.string().trim().url().required()
});

exports.listTopUrls = async (req, res) => {
    const list = await urls.find({}, {sort: {clicks: -1}, limit: 10});
    res.json(list);
};

exports.getUrl = async (req, res) => {
    const {slug} = req.params;

    try {
        const url = await urls.findOneAndUpdate({slug}, {$inc: {clicks: 1}});
        res.header('Access-Control-Allow-Origin', 'http://localhost:3000/');
        res.redirect(url.url);
    }
    catch (error) {
        res.redirect(`/?error=URL not found`);
    }
};

exports.createUrl = async (req, res, next) => {
    let {slug, url} = req.body;

    try {
        await schema.validate({slug, url});

        slug = slug ? slug.toLowerCase() : nanoid(7).toLowerCase();

        const newUrl = {url, slug, clicks: 0};
        const created = await urls.insert(newUrl);

        res.json(created);
    }
    catch (error) {
        next(error);
    }
};