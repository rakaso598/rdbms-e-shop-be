import express from "express";

const usersRouter = express.Router();

usersRouter.post("/sign-up", async (req, res, next) => {
  try {
    const data = req.body;
    console.log(data);

    // DB에 회원정보를 넣어서 저장할 차례 -> ORM 프리즈마를 사용하려면

    res.send("OK");
  } catch (e) {
    next(e);
  }
});

export default usersRouter;
