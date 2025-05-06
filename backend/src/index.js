import express from "express"; //Core framework for handling HTTP requests,routing,middleware, etc.
import dotenv from "dotenv"; //Loads the dotenv package.
import { connectDB } from "./lib/db.js";
import cookieParser from "cookie-parser";
import cors from "cors";

import authRoutes from "./routes/auth.route.js";
import messageRoutes from "./routes/message.route.js";

dotenv.config(); //Loads .env file contents into process.env.
const app = express();

const PORT = process.env.PORT;
app.use(
  cors({
    origin: "http://localhost:5173", // Must match your frontend URL exactly
    credentials: true,
    methods: ["GET", "POST", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

app.use(express.json()); //middleware that parses JSON bodies of incoming requests and attaches them to req.body
app.use(cookieParser());
app.use("/api/auth", authRoutes);
app.use("/api/message", messageRoutes);

app.get("/api/cors-test", (req, res) => {
  res.json({ message: "CORS test successful" });
});

app.listen(PORT, () => {
  console.log("Server is running on PORT:" + PORT);
  connectDB();
});
