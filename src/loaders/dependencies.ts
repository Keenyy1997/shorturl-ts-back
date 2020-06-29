import { Express, Request, Response, NextFunction } from "express";
import cors from "cors";
import bodyParser from "body-parser";
import morgan from "morgan";
import ErrorHandler from "../helpers/error-handler";

/**
 * @description Function to load all the dependencies into the express app
 * @param app {Express} Express Server Application
 */
export function loadDependencies(app: Express): null {
  // BodyParserJson
  app.use(bodyParser.json());

  // CORS
  app.use(cors());

  // Morgan
  app.use(morgan("dev"));

  // Global Error Handler
  app.use((err: Error, req: Request, res: Response, next: NextFunction) =>
    ErrorHandler(err, res)
  );

  return null;
}
