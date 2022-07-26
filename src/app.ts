import "@/setup";

import express from "express";
import "express-async-errors";
import cors from "cors";
import "reflect-metadata";

import router from "@/routers";
import errorHandlingMiddleware from "./middlewares/errorHandlingMiddleware";

const app = express();
app.use(cors());
app.use(express.json());

app.use(router);
app.use(errorHandlingMiddleware);

export default app;
