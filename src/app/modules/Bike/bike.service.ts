import { Request } from "express";
import prisma from "../../shared/prisma";

const createNewBike = async (req: Request) => {
  const newBikeData = await prisma.bike.create({
    data: req.body,
  });

  return newBikeData;
};

const getAllBikeData = async () => {
  const allBikeData = await prisma.bike.findMany();

  return allBikeData;
};

const getSpecificBike = async (req: Request) => {
  const specificBike = await prisma.bike.findUniqueOrThrow({
    where: {
      bikeId: req.params.bikeId,
    },
  });

  return specificBike;
};

export const BikeService = {
  createNewBike,
  getAllBikeData,
  getSpecificBike,
};
