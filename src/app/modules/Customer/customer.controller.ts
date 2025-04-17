import { Request, Response } from "express";
import catchAsync from "../../../shared/catchAsync";
import { StatusCodes } from "http-status-codes";
import sendResponse from "../../../shared//sendResponse";
import { CustomerService } from "./customer.service";

export const createCustomer = catchAsync(
  async (req: Request, res: Response) => {
    const result = await CustomerService.createCustomer(req);

    sendResponse(res, {
      success: true,
      status: StatusCodes.CREATED,
      message: "Customer created successfully",
      data: result,
    });
  }
);

const getAllCustomers = catchAsync(async (req: Request, res: Response) => {
  const result = await CustomerService.getAllCustomers();

  if (!result || result.length === 0)
    return sendResponse(res, {
      success: false,
      status: StatusCodes.NOT_FOUND,
      message: "Customers not found",
    });

  sendResponse(res, {
    success: true,
    status: StatusCodes.OK,
    message: "Customers fetched successfully",
    data: result,
  });
});

const getSpecificCustomer = catchAsync(async (req: Request, res: Response) => {
  const result = await CustomerService.getSpecificCustomer(req);

  if (!result)
    return sendResponse(res, {
      success: false,
      status: StatusCodes.NOT_FOUND,
      message: "Customer not found",
    });

  sendResponse(res, {
    success: true,
    status: StatusCodes.OK,
    message: "Customer fetched successfully",
    data: result,
  });
});

// UPDATE CUSTOMER DATA
const updateCustomerData = catchAsync(async (req: Request, res: Response) => {
  const result = await CustomerService.updateCustomer(req);
  sendResponse(res, {
    success: true,
    status: StatusCodes.OK,
    message: "Customer updated successfully",
    data: result,
  });
});

// DELETE CUSTOMER DATA
const deleteCustomerData = catchAsync(async (req: Request, res: Response) => {
  const result = await CustomerService.deleteCustomer(req);
  sendResponse(res, {
    success: true,
    status: StatusCodes.OK,
    message: "Customer deleted successfully",
  });
});

export const CustomerController = {
  createCustomer,
  getAllCustomers,
  getSpecificCustomer,
  updateCustomerData,
  deleteCustomerData,
};
