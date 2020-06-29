import { Router } from "express";
import {
  GenerateNewShortUrl,
  RedirectToURL,
} from "../../controllers/short-url";

const Route: Router = Router();

// [READ] Get Url Based On Identifier
Route.get("/:identifier", RedirectToURL);

// [CREATE] Generate Short Url
Route.post("/", GenerateNewShortUrl);

export default Route;
