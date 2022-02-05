import {Router} from "express";
import UrlController from "../controllers/UrlController";

const urlRoutes = Router();

urlRoutes.get("/url", UrlController.listTopUrls);
urlRoutes.get("/url/:slug", UrlController.getUrl);
urlRoutes.post("/url", UrlController.createUrl);

export default urlRoutes;