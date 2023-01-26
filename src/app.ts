import express from "express";
import userRoutes from "./routes/users.route";
import authRoutes from "./routes/auth.route";
import connection from "./db/connection";
import { json, urlencoded } from "body-parser";

const app = express();

app.use(json());

app.use(urlencoded({ extended: true }));

app.use("/users", userRoutes);
app.use("/auth", authRoutes);

app.use(
  (
    err: Error,
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
  ) => {
    res.status(500).json({ message: err.message });
  }
);

connection.sync().then(() => {
  console.log("Database successfully connected");
}).catch((err: string) => {
  console.log("Error - ", err);
});

app.listen(4000, () => {
  console.log("Server started on port 4000");
});