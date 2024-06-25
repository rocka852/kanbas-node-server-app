import mongoose from "mongoose"

const quizSchema = new mongoose.Schema({
		"quizName": String,
		"course": String,
		"content": String,
		"state": String,
		"due": String,
		"points": String,
		"NumOfQuestions": String,
		"quizId":String,
		"instructions":String,
		"quizType":String,
		"assignmentGroup":String,
		"totalScore":String,
		"quizTime":String,
		"quizDue":String,
		"available":String,
		"until":String,
		"shuffleAnswers":Boolean,
		"published":Boolean,
		"timeLimit":Boolean,
		"allowMultiple":Boolean,
		"viewResponses":String,
		"showCorrectAnswers":String,
		"oneQuestionAtATime":String,
		"requireRespondusLockDown":String,
		"browser":String,
		"requireToViewQuizResults":String,
		"webCamRequired":String,
		"lockQuestionsAfterAnswering":String,
		"forEveryOne":String,
		"questions":Object

	},
	{collection: "quizes"}
)

export default quizSchema