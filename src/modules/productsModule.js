import express from "express";
import userOnly from "../middlewares/userOnlyMiddleware.js";
import prisma from "../db/prisma/clientPrisma.js";

const productsRouter = express.Router();

/**
 * 찜 하기
 */
productsRouter.put("/:productId/like", userOnly, async (req, res, next) => {
  try {
    const userId = req.userId;
    const productId = Number(req.params.productId);

    await prisma.$transaction(async (tx) => {
      const existingFavoriteProduct = await tx.favoriteProduct.findUnique({
        where: { userId_productId: { userId, productId } },
      });
      if (existingFavoriteProduct) return res.status(201).send("Created");

      await tx.favoriteProduct.create({ data: { userId, productId } });

      res.status(201).send("Created");
    });
  } catch (e) {
    next(e);
  }
});

/**
 * 찜 해제하기
 */
productsRouter.delete("/:productId/like", userOnly, async (req, res, next) => {
  try {
    const userId = req.userId;
    const productId = Number(req.params.productId);

    await prisma.$transaction(async (tx) => {
      const existingFavoriteProduct = await tx.favoriteProduct.findUnique({
        where: { userId_productId: { userId, productId } },
      });
      if (!existingFavoriteProduct) return res.status(204).send();

      await tx.favoriteProduct.delete({
        where: { userId_productId: { userId, productId } },
      });

      res.status(204).send();
    });
  } catch (e) {
    next(e);
  }
});

export default productsRouter;
