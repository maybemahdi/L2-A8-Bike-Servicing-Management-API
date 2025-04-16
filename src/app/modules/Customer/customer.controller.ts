import { Request, Response } from "express";
import catchAsync from "../../../shared/catchAsync";
import { StatusCodes } from "http-status-codes";
import sendResponse from "../../../shared//sendResponse";
import { customerService } from "./customer.service";

const createCustomer = catchAsync(async (req: Request, res: Response) => {
  const result = await customerService.createCustomer(req);

  sendResponse(res, {
    success: true,
    status: StatusCodes.OK,
    message: "Customer created succesfully",
    data: result,
  });
});

const getAllCustomers = catchAsync(async (req: Request, res: Response) => {
  const result = await customerService.getAllCustomers();
  sendResponse(res, {
    success: true,
    status: StatusCodes.OK,
    message: "All Customer retrived succesfully",
    data: result,
  });
});

const getSpecificCustomer = catchAsync(async (req: Request, res: Response) => {
  const result = await customerService.getSpecificCustomer(req);
  sendResponse(res, {
    success: true,
    status: StatusCodes.OK,
    message: "Get A Customer retrived succesfully",
    data: result,
  });
});

// update Customer data

const updateCustomerData = catchAsync(async (req: Request, res: Response) => {
  const result = await customerService.updateCustomer(req);
  sendResponse(res, {
    success: true,
    status: StatusCodes.OK,
    message: "Customer updated successfully",
    data: result,
  });
});

// delete Customer data

const deleteCustomerData = catchAsync(async (req: Request, res: Response) => {
  const result = await customerService.deleteCustomer(req);
  sendResponse(res, {
    success: true,
    status: StatusCodes.OK,
    message: "Customer deleted successfully",
  });
});

export const CustomerControllers = {
  createCustomer,
  getAllCustomers,
  getSpecificCustomer,
  updateCustomerData,
  deleteCustomerData,
};
