"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const pagination = (option) => {
    const page = Number(option.page) || 1;
    const limit = Number(option.limit) || 10;
    const skip = (page - 1) * limit;
    const sortBy = option.sortBy || "createAt";
    const sortOrder = option.sortOrder === "asc" ? "asc" : "desc";
    const orderBy = { [sortBy]: sortOrder };
    return { page, skip, limit, orderBy };
};
exports.default = pagination;
