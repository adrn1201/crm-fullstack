import express from 'express';
import mongoose from "mongoose";
import customerRoutes from "./routes/customers";

const app = express();


app.use(express.json());

const dbUrl = process.env.DB_URL || 'mongodb://localhost:27017/crm';
mongoose.connect(dbUrl);

const db = mongoose.connection;

db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
  console.log("Database connected");
});

app.use("/api/customers", customerRoutes);

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});