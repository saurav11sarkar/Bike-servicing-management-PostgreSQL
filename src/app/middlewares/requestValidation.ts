import { NextFunction, Request, Response } from "express";
import { AnyZodObject } from "zod";

const requestValidation = (schema: AnyZodObject) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      await schema.parseAsync(req.body);
      next();
    } catch (error) {
      next(error);
    }
  };
};

export default requestValidation;
