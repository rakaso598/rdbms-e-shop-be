import express from "express";

const ordersRouter = express.Router();

/**
 * 주문하기
 */
ordersRouter.post("/", async (req, res, next) => {
  try {
    const data = req.body;
    // 토큰 추출 , Basic 제거 , 앞 한개 뒤 한개씩 제거
    const token = req.headers.authorization.split("Basic ")[1];
    const userId = req.headers.authorization.split("Basic ")[1].slice(1, -1);
    console.log(token);

    res.send("OK");
  } catch (e) {
    next(e);
  }
});

export default ordersRouter;
