import catchAsycn from "../../utils/catchAsycn";
import sendResponse from "../../utils/sendResponse";
import { customerService } from "./customer.service";

const createCustomer = catchAsycn(async (req, res) => {
  const result = await customerService.createCustomer(req.body);
  sendResponse(res, 201, "Customer created successfully", result);
});
const getAllCustomer = catchAsycn(async (req, res) => {
  const result = await customerService.getAllCustomer();
  sendResponse(res, 200, "Customers fetched successfully", result);
});

const customerById = catchAsycn(async (req, res) => {
  const result = await customerService.customerById(req.params.id);
  sendResponse(res, 200, "Customer fetched successfully", result);
});

const updateCustomer = catchAsycn(async (req, res) => {
  const result = await customerService.updateCustomer(req.params.id, req.body);
  sendResponse(res, 200, "Customer updated successfully", result);
});

const deletedCustomer = catchAsycn(async (req, res) => {
  const result = await customerService.deletedCustomer(req.params.id);
  sendResponse(res, 200, "Customer updated successfully");
});

export const customerController = {
  createCustomer,
  getAllCustomer,
  customerById,
  updateCustomer,
  deletedCustomer,
};
