import { Response } from "express";

export type ApiResponse = (res: Response, message: any, statusCode?: number) => Response

export const successResponse: ApiResponse = (res: Response, message: any, statusCode?: number) : Response => 
    res.status(statusCode || 200).json({
    error: false,
    success: message,
});

export const errorResponse: ApiResponse = (res: Response, message: any, statusCode?: number) : Response => 
    res.status(statusCode || 500).json({
    error: message,
    success: false,
});