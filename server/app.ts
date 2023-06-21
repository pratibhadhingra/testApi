import express, { Express } from "express";
import rootRouter from "./src/Features/RootRouter";
import cors from "cors";

const app: Express = express();
const PORT = 3001;

const corsOptions = {
  credentials: true,
  ///..other options
};

app.use(cors(corsOptions))

app.use(express.json());

app.use("/api/v1", rootRouter);

// app.get('/logout', () => {
//   window.localStorage.removeItem('myToken')
//   console.log("logout")
// })

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


