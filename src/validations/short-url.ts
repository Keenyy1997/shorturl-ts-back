import Validator from "validator";
import { NewShortUrl } from "../@types/short-url.d";

export function ValidateGenerateShortUrl(
  Body: NewShortUrl
): NewShortUrl | Error {
  if (Validator.isURL(Body.url) === false) throw new Error("Invalid URL");

  return Body;
}
