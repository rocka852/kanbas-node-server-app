import mongoose from "mongoose"

const userSchema = new mongoose.Schema({
		username: {type: String, required:true, unique:true},
		password: {type: String, required:true},
		firstName: String,
		email: String,
		lastName: String,
		dob:Date,
		role: {
			type: String,
			enum:["STUDENT", "FACULTY", "ADMIN", "USER"],
			default: "USER"
		},
		loginId: String,
		section: String,
		lastActivity: Date,
		totlaActivity: String,
	},
	{collection: "users"}
)

export default userSchema

//noSQL did not take responsibility to specifying the STRUCTURE like S..ql
//instead you should cover that part in applications such as javascript