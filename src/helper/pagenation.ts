export interface IOption {
  page?: number;
  limit?: number;
  sortBy?: string;
  sortOrder?: "asc" | "desc";
}

const pagination = (option: IOption) => {
  const page = Number(option.page) || 1;
  const limit = Number(option.limit) || 10;
  const skip = (page - 1) * limit;
  const sortBy = option.sortBy || "createAt";
  const sortOrder: "asc" | "desc" = option.sortOrder === "asc" ? "asc" : "desc";
  const orderBy = { [sortBy]: sortOrder };

  return { page, skip, limit, orderBy };
};

export default pagination;
