import express, { Express } from "express";
import { loadDependencies } from "./dependencies";
import { loadRoutes } from "./routes";
import Logger from "../helpers/winston";

/**
 * @author Kenny Vallejo
 * @description Express server initializer
 * @param {Number} port Server Port
 * @function Start Initialize the server loading the dependencies and the routes
 */
class Server {
  public app: Express;
  private port: number;

  /**
   * @description The constructor will only receive the port number where the server is going to start listening requests
   * @param port {Number} Port Number
   */
  public constructor(port: number) {
    // Server Port
    this.port = port;
    // Express Server
    this.app = express();
  }

  /**
   * @description Starts the server loading the dependencies and the routes, finally the server will be listening the port received in the constructor
   */
  public start(): Express {
    // We load the dependencies and uses
    loadDependencies(this.app);

    // We start to load the routes
    loadRoutes(this.app);

    // After all, we start the server
    this.app.listen(this.port, () => {
      Logger.info(`> Express App Listening At: ${process.env.PORT}`);
      Logger.info(
        `> PORT: ${process.env.PORT} - STAGE: ${process.env.NODE_ENV} - MONGO: ${process.env.MONGODB_URI}`
      );
    });

    return this.app;
  }
}

export default Server;
