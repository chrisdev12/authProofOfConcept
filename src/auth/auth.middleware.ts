import { NextFunction, Request, Response } from "express";
import { errorResponse } from "../app/types/apiResponses";

const authMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void | Response> => {
  try {
    return next();
  } catch (error) {
    return errorResponse(res, error, 401);
  }
};
