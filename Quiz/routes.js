import * as dao from "./dao.js"
export default function QuizRoutes(app) {
	const findAllQuiz = async(req, res) => {
		const quizes = await dao.findAllQuiz()
		res.json(quizes)
	}

	const createQuiz = async(req, res) => {

	}

	const findQuizByCourse = async(req, res) => {

	}

	const updateQuiz = async(req, res) => {

	}

	app.post("/api/quizes", createQuiz)
	app.get("/api/quizes", findAllQuiz)
	app.get("/api/quizes/:quizId", findQuizByCourse)
	app.put("/api/quizes/:quizId", updateQuiz)
}