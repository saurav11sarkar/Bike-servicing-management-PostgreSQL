import { NextFunction, Request, Response } from "express";
import config from "../config";

const golobalError = (
  err: any,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const statusCode = err.statusCode || 500;
  res.status(statusCode).json({
    success: false,
    status: statusCode,
    message: err.message,
    error: err,
    stack:
      config.node_env === "development"
        ? err.stack
        : "Optional stack trace shown only in development",
  });
};

export default golobalError;
