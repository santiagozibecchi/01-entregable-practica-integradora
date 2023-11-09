import { Router } from "express";
import ProductModel from "../../models/product.model.js";

const router = Router();

router.get("/", async (req, res) => {
  let { page = 1, limit = 10, category, sort } = req.query;

  if (sort !== "asc" && sort !== "desc") {
    sort = "asc";
  }
  
  const opts = { page, limit, sort: { price: sort || "asc" } };
  const criteria = {};

  if (category) {
    criteria.category = category;
  }

  const result = await ProductModel.paginate(criteria, opts);
  res.render("products", buildResponse({ ...result, category, sort }));
});

const buildResponse = (data) => {
  return {
    status: "success",
    payload: data.docs.map((product) => product.toJSON()),
    totalPages: data.totalPages,
    prevPage: data.prevPage,
    nextPage: data.nextPage,
    page: data.page,
    hasPrevPage: data.hasPrevPage,
    hasNextPage: data.hasNextPage,
    prevLink: data.hasPrevPage
      ? `http://localhost:8080/products?limit=${data.limit}&page=${
          data.prevPage
        }${data.category ? `&category=${data.category}` : ""}${
          data.sort ? `&sort=${data.sort}` : ""
        }`
      : "",
    nextLink: data.hasNextPage
      ? `http://localhost:8080/products?limit=${data.limit}&page=${
          data.nextPage
        }${data.category ? `&category=${data.category}` : ""}${
          data.sort ? `&sort=${data.sort}` : ""
        }`
      : "",
  };
};

export default router;
