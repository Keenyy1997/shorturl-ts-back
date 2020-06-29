import { Response } from "express";
import Logger from "../helpers/winston";

export default function (err: Error, res: Response, statusCode: number = 500) {
  Logger.error(`> Express Error: ${err.toString()}`, err);

  return res.status(statusCode).json({
    message: statusCode === 500 ? "Internal Server Error" : err.message,
    stacktrace: process.env.NODE_ENV === "production" ? "???" : err.stack,
  });
}
