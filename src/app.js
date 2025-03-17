import express from "express";
import router from "./modules/indexModule";

const app = express();
const PORT = 5555;

app.use(router);

app.listen(PORT, () => {
  console.log(`Server started to listen at ${PORT}`);
});
