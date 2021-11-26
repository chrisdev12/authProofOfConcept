/* eslint-disable @typescript-eslint/no-explicit-any */
import { Response } from "express";
export default abstract class BaseController {
  protected successResponse(
    res: Response,
    message: any,
    statusCode?: number
  ): Response {
    return res.status(statusCode || 200).json({
      error: false,
      success: message,
    });
  }

  protected errorResponse(
    res: Response,
    message: any,
    statusCode?: number
  ): Response {
    return res.status(statusCode || 500).json({
      error: message,
      success: false,
    });
  }
}
