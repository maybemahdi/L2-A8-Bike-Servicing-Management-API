import { Request } from "express";
import prisma from "../../../shared/prisma";

const createNewService = async (req: Request) => {
  const newService = await prisma.serviceRecord.create({
    data: req.body,
  });

  return newService;
};

const getAllServiceData = async () => {
  const allServiceData = await prisma.serviceRecord.findMany();

  return allServiceData;
};

const getSpecificService = async (req: Request) => {
  const specificService = await prisma.serviceRecord.findUniqueOrThrow({
    where: {
      serviceId: req.params.serviceId,
    },
  });

  return specificService;
};

const markServiceAsCompleted = async (
  serviceId: string,
  completionDate?: string
) => {
  const updatedService = await prisma.serviceRecord.update({
    where: {
      serviceId,
    },
    data: {
      completionDate: completionDate ? new Date(completionDate) : new Date(),
      status: "done",
    },
  });

  return updatedService;
};

const getOverdueServices = async () => {
  //   console.log("called in service");
  const sevenDaysAgo = new Date();
  sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7);

  const services = await prisma.serviceRecord.findMany({
    where: {
      AND: [
        {
          OR: [{ status: "pending" }, { status: "in-progress" }],
        },
        {
          serviceDate: {
            lt: sevenDaysAgo,
          },
        },
      ],
    },
  });

  //   console.log("Fetched services:", services);
  return services;
};

export const ServicingService = {
  createNewService,
  getAllServiceData,
  getSpecificService,
  markServiceAsCompleted,
  getOverdueServices,
};
