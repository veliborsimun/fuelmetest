import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import cors from "cors";
import allRoutes from "./routes/userRoutes.js"

const app = express();
app.use(bodyParser.json());
app.use(cors());
dotenv.config();

app.use("/api", allRoutes);

const PORT = process.env.PORT || 7000;
const URL = process.env.MONGOURL;


mongoose.connect(URL).then(( )=> {

     console.log("DB connected successfully");

     app.listen(PORT, () => {
        console.log(`Server is running on port: ${PORT}`);
     })


}).catch(error => console.log(error));
