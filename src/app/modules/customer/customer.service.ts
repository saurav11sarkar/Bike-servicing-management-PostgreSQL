import { Customer } from "@prisma/client";
import { prisma } from "../../config";
import AppError from "../../error/appError";
import httpStatus from "http-status";
import { IOption } from "../../../helper/pagenation";
import pagination from "../../../helper/pagenation";

const createCustomer = async (payload: Customer) => {
  const result = await prisma.customer.create({
    data: payload,
  });
  return result;
};

export interface ICustomerFilter {
  name?: string;
  email?: string;
  phone?: string;
  searchTerm?: string;
}

const getAllCustomer = async (params: ICustomerFilter, option: IOption) => {
  const { searchTerm, ...filters } = params;
  const { page, limit, skip, orderBy } = pagination(option);

  const andSearchParams: any[] = [];

  if (searchTerm) {
    const searchFields = ["name", "email", "phone"];
    andSearchParams.push({
      OR: searchFields.map((field) => ({
        [field]: {
          contains: searchTerm,
          mode: "insensitive",
        },
      })),
    });
  }

  if (Object.keys(filters).length > 0) {
    andSearchParams.push({
      AND: Object.entries(filters).map(([key, value]) => ({
        [key]: { equals: value },
      })),
    });
  }

  const whereCondition =
    andSearchParams.length > 0 ? { AND: andSearchParams } : {};

  const result = await prisma.customer.findMany({
    where: whereCondition,
    skip,
    take: limit,
    orderBy,
  });

  const total = await prisma.customer.count({
    where: whereCondition,
  });

  return {
    meta: { page, limit, ...orderBy, total },
    data: result,
  };
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
  deletedCustomer,
};
