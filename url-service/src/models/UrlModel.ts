import mongoose from "mongoose";

interface Url {
    url: string,
    slug: string,
    clicks: number
}

const urlSchema = new mongoose.Schema<Url>({
    url: {type: String, required: true},
    slug: String,
    clicks: Number
}, {
    timestamps: true
});

const urlModel = mongoose.model("urls", urlSchema);

export default urlModel;