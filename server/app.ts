import express, { Express } from "express";
import rootRouter from "./src/Features/RootRouter";
import cors from "cors";

const app: Express = express();
const PORT = 3000;

app.use(cors())

app.use(express.json());

app.use("/api/v1", rootRouter);

const start = async () => {
  try {
    app.listen(PORT, () => {
      console.log("Running on the server ", PORT);
    });
  } catch (error) {
    console.log(error);
  }
};
start();
