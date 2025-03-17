import express from "express";
import usersRouter from "./usersModules.js";

const router = express.Router();

router.use("/users", usersRouter);

router.get("/health-check", (req, res, next) => {
  res.status(200).send("OK");
});

export default router;
