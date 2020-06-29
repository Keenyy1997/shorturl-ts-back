import Validator from "validator";
import { Request, Response } from "express";
import { generate as GenerateId } from "shortid";
import { ShortUrl } from "../@types/short-url";
import {
  generateShortUrl,
  getShortUrlByIdentifier,
} from "../integrations/short-url";
import { ReplaceSpaces } from "../integrations/strings";
import ErrorHandler from "../helpers/error-handler";

/**
 * @action CREATE
 * Generate a New `Short Url`
 */
export async function GenerateNewShortUrl(
  req: Request,
  res: Response
): Promise<Response> {
  try {
    let Body: ShortUrl = req.body;

    if (Validator.isURL(Body.url) !== true) throw new Error("Invalid URL");
    if (!Body.identifier) Body.identifier = GenerateId();

    Body.identifier = ReplaceSpaces(Body.identifier, "-");

    const NewRecord = await generateShortUrl(Body);

    return res.status(200).json({
      message: "New Record Saved",
      data: NewRecord,
    });
  } catch (err) {
    let statusCode: number = 500;

    if (err.message === "Invalid URL") statusCode = 400;
    if (err.message.includes("E11000") === true) {
      statusCode = 409;
      err.message = "Identifier Already Exists";
    }

    return ErrorHandler(err, res, statusCode);
  }
}

/**
 * @action GET (REDIRECT)
 * Redirect To An URL Based On The `Identifier` Param
 */
export async function RedirectToURL(
  req: Request,
  res: Response
): Promise<void> {
  try {
    const Identifier: string = req.params.identifier;

    const ShortUrlRecord = await getShortUrlByIdentifier(Identifier);

    if (ShortUrlRecord) res.redirect(ShortUrlRecord.url);
    else res.redirect("https://google.com/");
  } catch (err) {
    let statusCode: number = 500;
    ErrorHandler(err, res, statusCode);
  }
}
