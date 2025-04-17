import { Request } from "express";
import prisma from "../../shared/prisma";

const createCustomer = async (req: Request) => {
  const notExistCustomer = await prisma.customer.findUnique({
    where: {
      email: req.body.email,
    },
  });

  if (notExistCustomer) throw new Error("Customer already exits");

  const customerData = await prisma.customer.create({
    data: req.body,
  });

  return customerData;
};

const getAllCustomers = async () => {
  const allCustomers = await prisma.customer.findMany();

  return allCustomers;
};

const getSpecificCustomer = async (req: Request) => {
  const specificCustomer = await prisma.customer.findUniqueOrThrow({
    where: {
      customerId: req.params.customerId,
    },
  });

  return specificCustomer;
};

// update
const updateCustomer = async (req: Request) => {
  const updateResult = await prisma.customer.update({
    where: {
      customerId: req.params.customerId,
    },
    data: req.body,
  });

  return updateResult;
};

// delete
const deleteCustomer = async (req: Request) => {
  try {
    const notExitsCustomer = await prisma.customer.findUnique({
      where: {
        customerId: req.params.customerId,
      },
    });

    if (!notExitsCustomer) throw new Error("Customer not found");

    const deletedResult = await prisma.customer.delete({
      where: {
        customerId: req.params.customerId,
      },
    });

    return deletedResult;
  } catch (err) {
    throw new Error("An error occurred while trying to delete the customer");
  }
};

export const CustomerService = {
  createCustomer,
  getAllCustomers,
  getSpecificCustomer,
  updateCustomer,
  deleteCustomer,
};
