import dotenv from "dotenv";

if (process.env.NODE_ENV !== "production") dotenv.config();

import Server from "./loaders/server";

// Server Port
const PORT: number = Number(process.env.PORT) || 3000;

// Server init
new Server(PORT).start();

