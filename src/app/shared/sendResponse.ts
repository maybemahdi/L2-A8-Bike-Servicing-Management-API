import { Response } from "express";

const sendResponse = <T>(
	res: Response,
	jsonData: {
		success: boolean;
		status: number;
		message: string;
		data?: T | null | undefined;
		error?: any;
		stack?: string;
	}
) => {
	const response: any = {
		success: jsonData.success,
		message: jsonData.message,
	};
	if (jsonData.success && jsonData.data !== undefined)
		response.data = jsonData.data;

	if (!jsonData.success) {
		response.status = jsonData.status;
		// response.error = jsonData.error || null;
		if (jsonData.stack && process.env.NODE_ENV === "development")
			response.stack = jsonData.stack;
	}

	res.status(jsonData.status).json(response);
};

export default sendResponse;
