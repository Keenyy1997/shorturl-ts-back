import { createLogger, Logger, format, transports } from "winston";

const WinstonLogger: Logger = createLogger({
  level: process.env.NODE_ENV === "production" ? "info" : "debug",
  format: format.json(),
  defaultMeta: { timestamp: new Date() },
  transports: [new transports.Console()],
});

export default WinstonLogger;
