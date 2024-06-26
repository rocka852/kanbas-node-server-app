import model from "./model.js"

export const createQuiz = (quiz) => {
	delete quiz._id
	return model.create(quiz)
}
export const findAllQuiz = () => model.find()
export const findQuizById = (quizId) => model.findOne({"quizId":quizId})
export const updateQuizById = (quizId, quiz) => model.updateOne({"quizId": quizId}, {$set: quiz})