import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";

import catchAsync from "../../../shared/catchAsync";
import sendResponse from "../../../shared/sendResponse";

import { BikeService } from "./bike.service";

const createNewBike = catchAsync(async (req: Request, res: Response) => {
  const result = await BikeService.createNewBike(req);

  sendResponse(res, {
    success: true,
    status: StatusCodes.OK,
    message: "Bike added successfully",
    data: result,
  });
});

const getAllBikeData = catchAsync(async (req: Request, res: Response) => {
  const result = await BikeService.getAllBikeData();

  if (!result || result.length === 0)
    return sendResponse(res, {
      success: false,
      status: StatusCodes.NOT_FOUND,
      message: "Bikes not found",
    });

  sendResponse(res, {
    success: true,
    status: StatusCodes.OK,
    message: "Bikes fetched successfully",
    data: result,
  });
});

const getSpecificBike = catchAsync(async (req: Request, res: Response) => {
  const result = await BikeService.getSpecificBike(req);
  if (!result)
    return sendResponse(res, {
      success: false,
      status: StatusCodes.NOT_FOUND,
      message: "Bike not found",
    });
  sendResponse(res, {
    success: true,
    status: StatusCodes.OK,
    message: "Bike fetched successfully",
    data: result,
  });
});

export const BikeController = {
  createNewBike,
  getAllBikeData,
  getSpecificBike,
};
