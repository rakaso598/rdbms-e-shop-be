import express from "express";
import prisma from "../db/prisma/clientPrisma.js";

const usersRouter = express.Router();

/**
 * 회원가입
 */
usersRouter.post("/sign-up", async (req, res, next) => {
  try {
    const data = req.body;
    // console.log(data);
    // DB에 회원정보를 넣어서 저장할 차례 -> ORM 프리즈마를 사용하려면

    // DB랑 통신하는 코드는 -> 비동기적으로 작동
    const user = await prisma.user.create({
      data: {
        email: data.email,
        name: data.name,
        encryptedPassword: "$" + data.password + "@",
      },
      omit: {
        encryptedPassword: true,
      },
    });

    res.json(user); // res.json 은 전송 전 미리 json화
  } catch (e) {
    next(e);
  }
});

/**
 * 로그인
 */
usersRouter.post("/log-in", async (req, res, next) => {
  try {
    const data = req.body;
    console.log(data);

    // 전달 받은 이메일로 가입된 내역이 있는지 확인
    const user = await prisma.user.findUnique({ where: { email: data.email } });
    if (!user) throw new Error("가입되지 않은 이메일입니다...");

    res.send("OK");
  } catch (e) {
    next(e);
  }
});

export default usersRouter;
