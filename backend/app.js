import express  from "express";
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";
import fileUpload from "express-fileupload";
import {dbConnection} from "./database/dbConnection.js";
import { errorMiddleware } from "./middlewares/error.js";
import messageRouter from "./router/messageRouters.js"; 
import userRouter from "./router/userRoutes.js"; 

const app = express();
dotenv.config({ path: "./config/config.env"});

app.use( cors ({
    origin: [process.env.PORTFOLIO_URL, process.env.DASHBOARD_URL],
    methods:["GET","POST","DELETE","PUT"],
    credentials: true,
}));

app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded( { extended : true }));

app.use( fileUpload ( {
    useTempFiles : true,
    tempFileDir : "/tmp/",
    limits: { fileSize: 50 * 1024 * 1024 },
} 
));


// // Route to set a cookie
// app.get('/setcookie', (req, res) => {
//     const expires = new Date();
//     const cookieExpiresInDays = parseInt(process.env.COOKIE_EXPIRES, 10);
//     expires.setDate(expires.getDate() + cookieExpiresInDays);

//     res.cookie('exampleCookie', 'cookieValue', { expires, httpOnly: true });
//     res.send('Cookie is set with an expiration date.');
// });

app.use("/api/v1/message", messageRouter);
app.use("/api/v1/user", userRouter);


app.use("/api/v1/message", messageRouter);
app.use("/api/v1/user", userRouter);

dbConnection();
app.use(errorMiddleware);

 export default app;

