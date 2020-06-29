import Connection from "../database/mongo";
import { Schema, Document } from "mongoose";

interface IShortUrl extends Document {
  url: string;
  identifier: string;
}

const ShortUrlSchema: Schema = new Schema({
  url: {
    type: String,
    required: true,
    description: "Url to Redirect",
  },
  identifier: {
    type: String,
    unique: true,
    required: true,
    description: "Url Identifier",
  },
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

export default Connection.model<IShortUrl>("short_url", ShortUrlSchema);
