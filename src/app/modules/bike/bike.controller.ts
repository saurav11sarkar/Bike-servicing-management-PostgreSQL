import catchAsycn from "../../utils/catchAsycn";
import sendResponse from "../../utils/sendResponse";
import { bikeServices } from "./bike.service";

const createBike = catchAsycn(async (req, res) => {
  const result = await bikeServices.createBike(req.body);
  sendResponse(res, 201, "Bike added successfully", result);
});

const getAllBike = catchAsycn(async (req, res) => {
  const result = await bikeServices.getAllBike();
  sendResponse(res, 200, "Bike fetched successfully", result);
});

const getBikeById = catchAsycn(async (req, res) => {
  const result = await bikeServices.getBikeById(req.params.id);
  sendResponse(res, 200, "Bike fetched successfully", result);
});

export const bikeController = {
  createBike,
  getAllBike,
  getBikeById,
};
