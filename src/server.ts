import dotenv from "dotenv";
dotenv.config({ path: "./config.env" });
import express, { Request, Response } from "express";
import morgan from "morgan";
import studentRoutes from "./routes/studentRoutes";

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(morgan("dev"));

app.get("/", (req: Request, res: Response) => {
  res.send("elo");
});

app.use("/api/v1/students", studentRoutes);

app.listen(port, () => {
  console.log(`app listenining on port ${port}  `);
});
