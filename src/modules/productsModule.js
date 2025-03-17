import express from "express";
import userOnly from "../middlewares/userOnlyMiddleware.js";
import prisma from "../db/prisma/clientPrisma.js";

const productRouter = express.Router();

/**
 * 찜하기
 */
productRouter.put("/:productId/like", userOnly, async (req, res, next) => {
  try {
    const userId = req.userId;
    const productId = Number(req.params.productId);

    await prisma.favoriteProduct.create({ data: { userId, productId } });

    res.status(201).send("Created");
  } catch (e) {
    next();
  }
});

/**
 * 찜해제하기
 */
productRouter.delete("/:productId/like", userOnly, async (req, res, next) => {
  try {
    const userId = req.userId;
    const productId = Number(req.params.productId);

    await prisma.favoriteProduct.delete({
      where: {
        userId,
        productId,
      },
    });

    res.status(204);
  } catch (e) {
    next();
  }
});

export default productRouter;
