import express from "express";
import prisma from "../db/prisma/clientPrisma.js";

const ordersRouter = express.Router();

/**
 * 주문하기
 */
ordersRouter.post("/", async (req, res, next) => {
  try {
    const data = req.body;
    const token = req.headers.authorization.split("Basic ")[1];
    const userId = token.slice(1, -1);

    await prisma.$transaction(async (tx) => {
      const order = await tx.order.create({
        data: {
          userId,
        },
      });

      let totalAmount = 0;
      const promises = data.map(async ({ productId, quantity }) => {
        const { price } = await tx.product.findUnique({
          where: { id: productId },
          select: { price: true },
        });
        const amount = price * quantity;
        totalAmount += amount;

        await tx.orderItem.create({
          data: {
            orderId: order.id,
            productId,
            quantity,
            amount,
          },
        });
      });

      await Promise.all(promises);

      console.log(totalAmount);

      const updatedOrder = await tx.order.update({
        where: { id: order.id },
        data: { totalAmount },
      });

      res.json(updatedOrder);
    });
  } catch (e) {
    next(e);
  }
});

/**
 * 결제하기
 */
ordersRouter.post("/payment", async (req, res, next) => {
  try {
    const data = req.body;
    const { orderId, paidAmount } = data;

    prisma.$transaction(async (tx) => {
      let updatedOrder = await tx.order.update({
        where: { id: orderId },
        data: { paidAmount: { increament: paidAmount } },
      });

      if (updatedOrder.totalAmount === updatedOrder.paidAmount) {
        updatedOrder = await tx.order.update({
          where: { id: updatedOrder.id },
          data: { status: "paid" },
        });
      }

      res.json(updatedOrder);
    });
  } catch (e) {
    next(e);
  }
});

export default ordersRouter;
