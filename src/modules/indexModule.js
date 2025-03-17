import express from "express";
import usersRouter from "./usersModules.js";
import ordersRouter from "./ordersModule.js";
import productsRouter from "./productsModule.js";

const router = express.Router();

router.use("/users", usersRouter);
router.use("/orders", ordersRouter);
router.use("/products", productsRouter);

router.get("/health-check", (req, res) => {
  res.status(200).send("OK");
});

export default router;
