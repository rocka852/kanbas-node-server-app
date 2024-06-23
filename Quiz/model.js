import mongoose from "mongoose"
import schema from "./schema.js"

const model = mongoose.model("QuizModel", schema)

console.log("QuizModel create successfully")

export default model