import express from "express";

const productRouter = express.Router();

/**
 * 찜하기
 */
productRouter.put("/:productId/like", async (req, res, next) => {
  try {
  } catch (e) {
    next();
  }
});

/**
 * 찜해제하기
 */
productRouter.delete("/:productId/like", async (req, res, next) => {
  try {
  } catch (e) {
    next();
  }
});

export default productRouter;
