import express from "express";
import usersRouter from "./usersModules.js";
import ordersRouter from "./ordersModule.js";

const router = express.Router();

router.use("/users", usersRouter);
router.use("/orders", ordersRouter);

router.get("/health-check", (req, res, next) => {
  res.status(200).send("OK");
});

export default router;
