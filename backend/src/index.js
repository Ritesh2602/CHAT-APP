import express from "express"; //Core framework for handling HTTP requests,routing,middleware, etc.
import dotenv from "dotenv"; //Loads the dotenv package.
import { connectDB } from "./lib/db.js";

import authRoutes from "./routes/auth.route.js";

dotenv.config(); //Loads .env file contents into process.env.
const app = express();

const PORT = process.env.PORT;

app.use(express.json()); //middleware that parses JSON bodies of incoming requests and attaches them to req.body
app.use("/api/auth", authRoutes);

app.listen(PORT, () => {
  console.log("Server is running on PORT:" + PORT);
  connectDB();
});
