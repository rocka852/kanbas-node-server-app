import * as dao from "./dao.js"
export default function QuizRoutes(app) {
	const findAllQuiz = async(req, res) => {
		const quizes = await dao.findAllQuiz()
		res.json(quizes)
	}

	const createQuiz = async(req, res) => {
		const quiz = await dao.createQuiz(req.body)
		res.json(quiz)
	}

	const findQuizById = async(req, res) => {
		console.log("In findQuizByid " + JSON.stringify(req.params))
		const quiz = await dao.findQuizById(req.params.quizId)
		res.json(quiz)
	}

	const updateQuiz = async(req, res) => {
		const { quizId } =req.params
		console.log("Update quiz by id= " + JSON.stringify(req.params))
		const status = await dao.updateQuizById(quizId, req.body)
		res.json(status)
	}

	app.post("/api/quizzes", createQuiz)
	app.get("/api/quizzes", findAllQuiz)
	app.get("/api/quizzes/:quizId", findQuizById)
	app.put("/api/quizzes/:quizId", updateQuiz)
}