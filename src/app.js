import express from "express";
import router from "./modules/indexModule.js";
import errorHandler from "./middlewares/errorHandlerMiddleware.js";
import authentication from "./middlewares/authenticationMiddleware.js";

const app = express();
const PORT = 5555;

app.use(authentication);
app.use(express.json()); // json 파싱 미드웨어
app.use(router);
app.use(errorHandler); // 에러핸들 미들웨어

app.listen(PORT, () => {
  console.log(`Server started to listen at ${PORT}`);
});
