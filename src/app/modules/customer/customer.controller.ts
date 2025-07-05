import pick from "../../../shared/pick";
import catchAsycn from "../../utils/catchAsycn";
import sendResponse from "../../utils/sendResponse";
import { customerService } from "./customer.service";

const createCustomer = catchAsycn(async (req, res) => {
  const result = await customerService.createCustomer(req.body);
  sendResponse(res, 201, "Customer created successfully", result);
});

const getAllCustomer = catchAsycn(async (req, res) => {
  const filter = pick(req.query, ["name", "email", "phone", "searchTerm"]);
  const option = pick(req.query, ["page", "limit", "sortBy", "sortOrder"]);
  const result = await customerService.getAllCustomer(filter, option);
  sendResponse(res, 200, "Customers fetched successfully", result.data, result.meta);
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
