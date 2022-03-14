import {Router} from "express";
import UrlController from "../controllers/UrlController";

const urlRoutes = Router();

urlRoutes.get("/api/v1/url", UrlController.listTopUrls);
urlRoutes.get("/api/v1/url/:slug", UrlController.getUrl);
urlRoutes.post("/api/v1/url", UrlController.createUrl);

export default urlRoutes;