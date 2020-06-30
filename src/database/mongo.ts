import mongoose from "mongoose";
import Logger from "../helpers/winston";

const MONGO_CONFIG: mongoose.ConnectionOptions = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

Logger.debug(`> Database Target: ${process.env.MONGODB_URI}`);

mongoose.connect(
  process.env.MONGODB_URI ?? "No MongoDB",
  MONGO_CONFIG,
  (err: Error) => {
    if (err) {
      Logger.error(`> MongoDB Error: ${err.toString()}`, err);
      process.exit(1);
    } else {
      Logger.info("> MongoDB: Online!");
    }
  }
);

export default mongoose.connection;
