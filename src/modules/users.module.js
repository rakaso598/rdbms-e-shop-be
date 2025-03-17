const express = require("express");
const prisma = require("../db/prisma/client.prisma");

const usersRouter = express.Router();

/**
 * 회원 가입
 */
usersRouter.post("/sign-up", async (req, res, next) => {
  try {
    const data = req.body;
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

    res.json(user);
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

    const user = await prisma.user.findUnique({ where: { email: data.email } });
    if (!user) throw new Error("가입되지 않은 이메일입니다...");

    if ("$" + data.password + "@" !== user.encryptedPassword)
      throw new Error("비밀번호가 일치하지 않습니다...");

    const token = "$" + user.id + "@"; // 이걸 알고리즘에 의해 만든 비밀스러운 토큰이라고 가정합시다

    res.send(token);
  } catch (e) {
    next(e);
  }
});

module.exports = usersRouter;
