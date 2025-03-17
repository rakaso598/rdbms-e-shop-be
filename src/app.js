import express from "express";

const app = express();
const PORT = 5555;

app.get("/health-check", (req, res, next) => {
  res.status(200).send("OK");
});

app.listen(PORT, () => {
  console.log(`Server started to listen at ${PORT}`);
});
