import mongoose from "mongoose"

const quizSchema = new mongoose.Schema({
		"quizName": String,
		"course": String,
		"content": String,
		"state": String,
		"due": String,
		"points": String,
		"NumOfQuestions": String
	},
	{collection: "quizes"}
)

export default quizSchema