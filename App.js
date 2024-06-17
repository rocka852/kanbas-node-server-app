import express from "express"
import mongoose from "mongoose"
import "dotenv/config"
import Hello from "./Hello.js"
import Lab5 from "./Lab5/index.js"
import CourseRoutes from "./Kanbas/Courses/routes.js"
import ModuleRoutes from "./Kanbas/Modules/routes.js"
import AssignmentRoutes from "./Kanbas/Assignments/routes.js"
import UserRoutes from "./Users/routes.js"
import cors from "cors"

const CONNECTION_STRING = process.env.MONGO_CONNECTION_TRING || "mongodb://127.0.0.1:27017/kanbas"
mongoose.connect(CONNECTION_STRING)
const app = express()
//create a express library and assigns to local variable app
app.use(cors())
app.use(express.json())

//comment explain added after 3.6 but statement implement at the beginning check 
//if there is other explaination at the beginning
//Attention make sure this comes after cors
//this allow you to send json instead of string because string password is unsafe
Lab5(app)
Hello(app)
CourseRoutes(app)
ModuleRoutes(app)
AssignmentRoutes(app)
UserRoutes(app)
//javascript is case sensitive hello(app) is not allowed

/* move this part to Hello
//Then

app.get("/hello", (req,res)=>{res.send("Life is good")})
// "/hello will handles this http request"
//without this line, there will be no page called /hello
app.get("/", (req,res)=>res.send("Welcome to Full Stack Development"))
// note if you use ./ you will get nothing
*/
app.listen(process.env.PORT || 4000)
//without this 4000, localhost doesn't active


