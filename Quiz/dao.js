import model from "./model.js"

export const createQuiz = (quiz) => {
	delete quiz._id
	return model.create(quiz)
}
export const findAllQuiz = () => model.find()
export const findQuizById = (quizId) => model.findOne({"quizId":quizId})
export const updateQuiz = (quizId, quiz) => model.updateOne({_id: quizId}, {$set: quiz})