import model from "./model.js"

export const createQuiz = (quiz) => {}
export const findAllQuiz = () => model.find()
export const findQuizById = (quizId) => model.find({"qid":quizId})
export const updateQuiz = (quizId, quiz) => model.updateOne({_id: quizId}, {$set: quiz})