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
		console.log(JSON.stringify(req.params))
		const quiz = await dao.findQuizById(req.params.quizId)
		res.json(quiz)
	}

	const updateQuiz = async(req, res) => {

	}

	app.post("/api/quizes", createQuiz)
	app.get("/api/quizes", findAllQuiz)
	app.get("/api/quizes/:quizId", findQuizById)
	app.put("/api/quizes/:quizId", updateQuiz)
}