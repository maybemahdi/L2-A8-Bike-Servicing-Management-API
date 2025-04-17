import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";

import catchAsync from "../../shared/catchAsync";
import sendResponse from "../../shared/sendResponse";

import { ServicingService } from "./service.service";

const createNewService = catchAsync(async (req: Request, res: Response) => {
  const result = await ServicingService.createNewService(req);

  sendResponse(res, {
    success: true,
    status: StatusCodes.CREATED,
    message: "Service record created successfully",
    data: result,
  });
});

const getAllServiceData = catchAsync(async (req: Request, res: Response) => {
  //   console.log("call in all service controller");

  const result = await ServicingService.getAllServiceData();
  if (!result || result.length === 0)
    return sendResponse(res, {
      success: false,
      status: StatusCodes.NOT_FOUND,
      message: "No service records found",
    });
  sendResponse(res, {
    success: true,
    status: StatusCodes.OK,
    message: "Service records fetched successfully",
    data: result,
  });
});

const getSpecificService = catchAsync(async (req: Request, res: Response) => {
  const result = await ServicingService.getSpecificService(req);

  if (!result)
    return sendResponse(res, {
      success: false,
      status: StatusCodes.NOT_FOUND,
      message: "Specific Service not found",
    });

  sendResponse(res, {
    success: true,
    status: StatusCodes.OK,
    message: "Service record fetched successfully",
    data: result,
  });
});

const markServiceAsCompleted = catchAsync(
  async (req: Request, res: Response) => {
    const { serviceId } = req.params;
    const { completionDate } = req.body;

    const result = await ServicingService.markServiceAsCompleted(
      serviceId,
      completionDate
    );
    if (!result)
      return sendResponse(res, {
        success: false,
        status: StatusCodes.NOT_FOUND,
        message: "Service not found or could not be updated",
      });

    sendResponse(res, {
      success: true,
      status: StatusCodes.OK,
      message: "Service marked as completed",
      data: result,
    });
  }
);

const getOverdueServices = catchAsync(async (req: Request, res: Response) => {
  //   console.log("call in overdue controller");
  const services = await ServicingService.getOverdueServices();

  if (!services || services.length === 0)
    return sendResponse(res, {
      success: false,
      status: StatusCodes.NOT_FOUND,
      message: "No overdue or pending services found",
    });

  return sendResponse(res, {
    success: true,
    status: StatusCodes.OK,
    message: "Overdue or pending services fetched successfully",
    data: services,
  });
});

export const ServiceController = {
  createNewService,
  getAllServiceData,
  getSpecificService,
  markServiceAsCompleted,
  getOverdueServices,
};
