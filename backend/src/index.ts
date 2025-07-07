import express from 'express';
import mongoose from "mongoose";
import customerRoutes from "./routes/customers";
import cors from 'cors';

const app = express();


app.use(express.json());
app.use(cors());

const dbUrl = process.env.MONGODB_URI || 'mongodb://localhost:27017/crm';
mongoose.connect(dbUrl);

const db = mongoose.connection;

db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
  console.log("Database connected");
});

app.use("/api/customers", customerRoutes);

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});