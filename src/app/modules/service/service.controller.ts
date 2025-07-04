import catchAsycn from "../../utils/catchAsycn";
import sendResponse from "../../utils/sendResponse";
import { serviceServices } from "./service.service";

const createServicRecode = catchAsycn(async (req, res) => {
  const result = await serviceServices.createServicRecode(req.body);
  sendResponse(res, 201, "Service record created successfully", result);
});

const getAllServicRecodes = catchAsycn(async (req, res) => {
  const result = await serviceServices.getAllServicRecodes();
  sendResponse(res, 200, "Service records fetched successfully", result);
});

const getServicRecodesById = catchAsycn(async (req, res) => {
  const result = await serviceServices.getServicRecodesById(req.params.id);
  sendResponse(res, 200, "Service record fetched successfully", result);
});

const updateServicRecode = catchAsycn(async (req, res) => {
  const result = await serviceServices.updateServicRecode(
    req.params.id,
    req.body
  );
  sendResponse(res, 200, "Service record updated successfully", result);
});

const getPendingOrOverdueServices = catchAsycn(async (req, res) => {
  const result = await serviceServices.getPendingOrOverdueServices();
  sendResponse(res, 200, "Service records fetched successfully", result);
});

export const serviceController = {
  createServicRecode,
  getAllServicRecodes,
  getServicRecodesById,
  updateServicRecode,
  getPendingOrOverdueServices,
};
