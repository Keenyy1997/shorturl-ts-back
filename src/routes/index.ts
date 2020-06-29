import { Router } from "express";
import ShortUrl from "./shorturl/routes";

const masterRouter: Router = Router();
/**
 * > Short Url [CRUD]
 */
masterRouter.use("/", ShortUrl);

export default masterRouter;

