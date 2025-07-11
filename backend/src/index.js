import "dotenv/config";
import express from "express";
import cors from "cors";
import { connectDB } from "./lib/db.js";
import authRoutes from "./routes/authRoutes.js";
import bookRoutes from "./routes/bookRoutes.js";
const app=express()
const PORT=process.env.PORT;

app.use(express.json());
app.use(cors())
app.use("/api/auth",authRoutes);
app.use("/api/books",bookRoutes);

app.listen(PORT,()=>{
    console.log(`server started at PORT ${PORT}`);
    connectDB();
});