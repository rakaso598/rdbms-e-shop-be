import express from "express";

const ordersRouter = express.Router();

/**
 * 주문하기
 */
ordersRouter.post("/", async (req, res, next) => {
  try {
    const data = req.body;
    console.log(data);
    

    res.send("OK");
  } catch (e) {
    next(e);
  }
});

export default ordersRouter;
