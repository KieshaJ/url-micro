import mongoose from "mongoose";

interface Url {
    url: string,
    slug: string
}

const urlSchema = new mongoose.Schema<Url>({
    url: {type: String, required: true},
    slug: String,
}, {
    timestamps: true
});

const urlModel = mongoose.model("urls", urlSchema);

export default urlModel;