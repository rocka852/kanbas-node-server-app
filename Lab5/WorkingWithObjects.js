const assignment = {
	id:1, 
	title:"NodeJS Assignment",
	description: "Create a NodeJS server with ExpressJS",
	due: "2021-10-10",
	completed: false,
	score:0
}

const module = {
	id: "module001",
	name: "full stack module",
	description: "learning full stack development and gain new abilities",
	course: "CS5610"
}

export default function WorkingWithObjects(app) {
	app.get("/lab5/assignment", (req,res)=>{
		res.json(assignment);
		//use json instead of send if the response is formatted json
	})

	app.get("/lab5/assignment/title", (req,res)=>{
		res.json(assignment.title)
	})

	// assign a new title modify the origianl, last to next restart
	// note you should have title/ then the new name like guitar(without:)
	app.get("/lab5/assignment/title/:newTitle", (req,res)=>{
		const {newTitle} = req.params;
		assignment.title = newTitle;
		res.json(assignment);
	})

	app.get("/lab5/module", (req,res)=>{
		res.json(module);
	})

	app.get("/lab5/module/name", (req,res)=>{
		res.json(module.name)
	})

	app.get("/lab5/assignment/score/:newScore", (req,res)=>{
		const {newScore} = req.params;
		assignment.score = newScore;
		res.json(assignment);
	})

	app.get("/lab5/assignment/complete/:newComplete", (req,res)=>{
		const {newComplete} = req.params;
		assignment.complete = newComplete;
		res.json(assignment);
	})
	app.get("/lab5/module/description/:newDes", (req,res)=>{
		const {newDes} = req.params;
		module.description = newDes;
		res.json(module);
	})
	app.get("/lab5/module/name/:newName", (req,res)=>{
		const {newName} = req.params;
		module.name = newName;
		res.json(module);
	})
}