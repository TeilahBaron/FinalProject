import express, {Request, Response} from "express";
import cors from "cors";
import "dotenv/config";
import mongoose from "mongoose";
import myUserRoute from "./routes/MyUserRoute";

mongoose.connect(process.env.MONGODB_CONNECTION_STRING as string).then(()=> console.log("Connected to database!"));



const app = express();
app.use(express.json());
app.use(cors());

//  /api/my/user
app.use("/api/my/user", myUserRoute);

app.listen(3001, ()=> {
    console.log("server started on localhost:3001");
});