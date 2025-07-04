import { Bike } from "@prisma/client";
import { prisma } from "../../config";
import AppError from "../../error/appError";
import httpStatus from "http-status";

const createBike = async (payload: Bike) => {
  const customer = await prisma.customer.findUnique({
    where: { customerId: payload.customerId },
  });

  if (!customer) {
    throw new AppError(404, "Customer not found");
  }

  const result = await prisma.bike.create({
    data: payload,
  });
  return result;
};

const getAllBike = async () => {
  const result = await prisma.bike.findMany();
  return result;
};

const getBikeById = async (id: string) => {
  const result = await prisma.bike.findUnique({
    where: {
      bikeId: id,
    },
  });
  if (!result) {
    throw new AppError(httpStatus.NOT_FOUND, "Bike is not found");
  }
  return result;
};

export const bikeServices = {
  createBike,
  getAllBike,
  getBikeById,
};
