// import express from "express";
// import cors from "cors";
// import userRouter from "./routes/users.route";
// import dotenv from "dotenv";
// import pool from "./database/db";
// import { users } from "./mocks/users.data";

// dotenv.config();

// const app = express();

// const port = process.env.PORT || 3000;

// // PostgreSQL
// app.get("/users", async (req, res) => {
//   try {
//     const client = await pool.connect();
//     const result = client.query("select * from users");
//     client.release();
//     res.json({
//       message: "Users",
//       result: users,
//     });
//   } catch (error) {
//     console.log(error);
//   }
// });

// // Middlewares
// app.use(cors());
// app.use(express.json());

// // Routes
// // app.use("/users", userRouter);

// app.listen(port, () => {
//   console.log(`Server running on port http://localhost:${port}/`);
// });

import express from "express";
import pool from "./database/db";

const app = express();
const port = process.env.PORT || 3000;

app.get("/test", async (req, res) => {
  try {
    const client = await pool.connect();
    const result = await client.query("select * from user");
    client.release();
    res.json({
      message: "Users",
      result: result,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Internal Server Error",
      error: error as Error,
    });
  }
});

app.listen(port, () => {
  console.log(`Server running on port http://localhost:${port}/`);
});