import { ServiceRecord } from "@prisma/client";
import { prisma } from "../../config";
import AppError from "../../error/appError";
import httpStatus from "http-status";

const createServicRecode = async (payload: ServiceRecord) => {
  const bike = await prisma.bike.findUnique({
    where: { bikeId: payload.bikeId },
  });

  if (!bike) {
    throw new AppError(httpStatus.NOT_FOUND, "Bike not found");
  }

  const result = await prisma.serviceRecord.create({
    data: payload,
  });
  return result;
};

const getAllServicRecodes = async () => {
  const result = await prisma.serviceRecord.findMany();
  return result;
};

const getServicRecodesById = async (id: string) => {
  const result = await prisma.serviceRecord.findUnique({
    where: { serviceId: id },
  });
  if (!result) {
    throw new AppError(httpStatus.NOT_FOUND, "Service not found");
  }
  return result;
};

const updateServicRecode = async (
  id: string,
  payload: Partial<ServiceRecord>
) => {
  const service = await prisma.serviceRecord.findUnique({
    where: { serviceId: id },
  });

  if (!service) {
    throw new AppError(httpStatus.NOT_FOUND, "Service record not found");
  }

  const updatedData: Partial<ServiceRecord> = {
    ...payload,
  };

  // If completionDate is provided, ensure it's valid and set status to "done"
  if (payload.completionDate) {
    const parsedDate = new Date(payload.completionDate);
    if (isNaN(parsedDate.getTime())) {
      throw new AppError(httpStatus.BAD_REQUEST, "Invalid completion date");
    }
    updatedData.completionDate = parsedDate;
    updatedData.status = "done";
  }
  // If status is "done" but no completionDate is provided, set completionDate to now
  else if (payload.status === "done") {
    updatedData.completionDate = new Date();
  }

  const result = await prisma.serviceRecord.update({
    where: { serviceId: id },
    data: updatedData,
  });

  return result;
};

const getPendingOrOverdueServices = async () => {
  const sevenDaysAgo = new Date();
  sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7);

  const result = await prisma.serviceRecord.findMany({
    where: {
      AND: [
        {
          status: {
            in: ["pending", "in_progress"],
          },
        },
        {
          serviceDate: {
            lt: sevenDaysAgo,
          },
        },
      ],
    },
    orderBy: {
      serviceDate: "asc",
    },
  });

  return result;
};

export const serviceServices = {
  createServicRecode,
  getAllServicRecodes,
  getServicRecodesById,
  updateServicRecode,
  getPendingOrOverdueServices,
};
