import mongoose from "mongoose"
import schema from "./schema.js"

const model = mongoose.model("UserModel", schema)
//console.log("model created successfully")

//console.log(model.findById("127"))

export default model;