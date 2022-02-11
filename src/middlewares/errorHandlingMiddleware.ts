import ExternalApiError from "@/errors/ExternalApiError";
import { NextFunction, Request, Response } from "express";
import httpStatus from "http-status";

export default function errorHandlingMiddleware(err: Error, _req: Request, res: Response, _next: NextFunction) {
  if (err instanceof ExternalApiError) {
    return res.status(httpStatus.SERVICE_UNAVAILABLE).send(err.message);
  }

  res.status(httpStatus.INTERNAL_SERVER_ERROR).send({
    message: "Internal Server Error!"
  });
}
