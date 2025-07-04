import { Customer } from "@prisma/client";
import { prisma } from "../../config";
import AppError from "../../error/appError";
import httpStatus from "http-status";

const createCustomer = async (payload: Customer) => {
  const result = await prisma.customer.create({
    data: payload,
  });
  return result;
};

const getAllCustomer = async () => {
  const result = await prisma.customer.findMany();
  return result;
};

const customerById = async (id: string) => {
  const result = await prisma.customer.findUniqueOrThrow({
    where: {
      customerId: id,
    },
  });
  return result;
};

const updateCustomer = async (id: string, payload: Partial<Customer>) => {
  const isExited = await prisma.customer.findUnique({
    where: {
      customerId: id,
    },
  });
  if (!isExited) {
    throw new AppError(httpStatus.NOT_FOUND, "Customer not found");
  }

  const result = await prisma.customer.update({
    where: {
      customerId: id,
    },
    data: payload,
  });
  return result;
};

const deletedCustomer = async (id: string) => {
  const isExited = await prisma.customer.findUnique({
    where: {
      customerId: id,
    },
  });
  if (!isExited) {
    throw new AppError(httpStatus.NOT_FOUND, "Customer not found");
  }
  const result = await prisma.customer.delete({
    where: {
      customerId: id,
    },
  });
  return result;
};

export const customerService = {
  createCustomer,
  getAllCustomer,
  customerById,
  updateCustomer,
  deletedCustomer
};
