import "dotenv/config";
import express from "express";
import { connectDB } from "./lib/db.js";
import authRoutes from "./routes/authRoutes.js";
const app=express()
const PORT=process.env.PORT;

app.use(express.json());
app.use("/api/auth",authRoutes);


app.listen(PORT,()=>{
    console.log(`server started at PORT ${PORT}`);
    connectDB();
});