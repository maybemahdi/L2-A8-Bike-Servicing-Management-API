import { Prisma } from "@prisma/client";
import { NextFunction, Request, Response } from "express";
import httpStatus from "http-status-codes";

const globalErrorHandler = (
  err: any,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  let statusCode = httpStatus.INTERNAL_SERVER_ERROR;
  let success = false;
  let message = err.message || "Something went wrong!";
  let error = err;
  let stack: string | undefined;

  const isDev = process.env.NODE_ENV === "development";

  if (err instanceof Prisma.PrismaClientValidationError) {
    message = "Validation Error";
    error = err.message;
  } else if (err instanceof Prisma.PrismaClientKnownRequestError) {
    if (err.code === "P2002") {
      message = "Duplicate Key error";
      error = err.meta;
    }
  }

  if (err instanceof Error) {
    message = err.message || "An unexpected error occurred.";
    stack = isDev ? err.stack : undefined;
  }

  res.status(statusCode).json({
    success,
    status: statusCode,
    message,
    error,
    stack,
  });
};

export default globalErrorHandler;
