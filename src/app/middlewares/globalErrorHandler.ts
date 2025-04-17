import {
	PrismaClientKnownRequestError,
	PrismaClientValidationError,
} from "@prisma/client/runtime/library";
import { NextFunction, Request, Response } from "express";
import httpStatus, { StatusCodes } from "http-status-codes";
import sendResponse from "../shared/sendResponse";

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

	// console.log(error.code);

	const isDev = process.env.NODE_ENV === "development";
	if (err.code === "CUSTOMER_NOT_FOUND") {
		return sendResponse(res, {
			success: false,
			status: StatusCodes.NOT_FOUND,
			message: "Customer Not found",
		});
	} else if (err.code === "BIKE_NOT_FOUND") {
		return sendResponse(res, {
			success: false,
			status: StatusCodes.NOT_FOUND,
			message: "Bike Not found",
		});
	} else if (err instanceof PrismaClientValidationError) {
		// console.log("First");
		return sendResponse(res, {
			success: false,
			status: StatusCodes.BAD_REQUEST,
			message: "Validation Error",
		});
	} else if (err instanceof PrismaClientKnownRequestError) {
		if (err.code === "P2002")
			return sendResponse(res, {
				success: false,
				status: StatusCodes.CONFLICT,
				message: "Duplicate Key error",
			});
		else if (error.code === "P2025")
			return sendResponse(res, {
				success: false,
				status: StatusCodes.NOT_FOUND,
				message: "Not found",
			});
	} else if (err instanceof Error) {
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
