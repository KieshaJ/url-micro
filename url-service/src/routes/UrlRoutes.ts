import {Router} from "express";
import UrlController from "../controllers/UrlController.js";

const urlRoutes = Router();

urlRoutes.get("/api/v1/url", (req, res) => UrlController.listTopUrls(req, res));
urlRoutes.get("/api/v1/url/:slug", () => UrlController.getUrl);
urlRoutes.post("/api/v1/url", (req, res) => UrlController.createUrl(req, res));

export default urlRoutes;