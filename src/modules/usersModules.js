import express from "express";

const usersRouter = express.Router();

usersRouter.post("/sign-up", async (req, res, next) => {
  try {
    const data = req.body;
    console.log(data);

    res.send("OK");
  } catch (e) {
    next(e);
  }
});

export default usersRouter;
