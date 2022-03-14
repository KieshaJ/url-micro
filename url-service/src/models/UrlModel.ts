import mongoose from "mongoose";

const UrlSchema = new mongoose.Schema({
    url: String,
    slug: String,
}, {
    timestamps: true
});

const UrlModel = mongoose.model("urls", UrlSchema);

export default UrlModel;