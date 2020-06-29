import ShortUrlModel from "../models/short-url";
import { ShortUrl } from "../@types/short-url";

export async function isIdentifierInUse(identifier: string) {
  const Record = await ShortUrlModel.findOne({ identifier });
  return Record !== null;
}

export async function generateShortUrl(body: ShortUrl) {
  const Record = await ShortUrlModel.create(body);

  return Record;
}

export async function getShortUrlByIdentifier(identifier: string) {
  const Record = await ShortUrlModel.findOne({ identifier });

  return Record;
}
