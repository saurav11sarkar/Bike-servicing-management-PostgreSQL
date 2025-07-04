import { Response } from "express";

const sendResponse = <T>(
  res: Response,
  statusCode: number,
  message: string,
  data?: T | null | undefined,
  meta?: { page: number; limit: number; total: number }
) => {
  res.status(statusCode).json({
    success: true,
    message,
    data,
    meta,
  });
};

export default sendResponse;
