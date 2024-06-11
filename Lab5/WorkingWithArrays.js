let todos = [
	{ id: 1, title: "Task 1", completed: false },  
	{ id: 2, title: "Task 2", completed: true },
    { id: 3, title: "Task 3", completed: false },  
    { id: 4, title: "Task 4", completed: true },
];

export default function WorkingWithArrays(app) {
	/*app.get("/lab5/todos", (req,res)=>{
		res.json(todos)
	}) 
	add query path function at line 21 and support both path with ? or not
	*/

/*	app.get("/lab5/todos/:id", (req,res)=>{
		const {id} = req.params
		const todo = todos.find((t) => t.id === parseInt(id))
		res.json(todo)
	})    must come after line 38 create, MUST otherwise create will be a id*/

	app.get("/lab5/todos", (req,res)=>{
		const {completed} = req.query;
		//query folows by ?
		if(completed !== undefined) {
			const completedBool = completed === "true"
			const completedTodos = todos.filter(t=>t.completed === completedBool)
			res.json(completedTodos)
			//http://localhost:4000/lab5/todos?completed=false
			return //if you are not using else
		}
		else{
			res.json(todos)
			//http://localhost:4000/lab5/todos
		}
		
	})

	app.get("/lab5/todos/create", (req,res)=>{
		const newTodo = {
			id: new Date().getTime(),  //"id":1718061508664
			title: "New Task",
			completed: false
		}
		todos.push(newTodo)
		res.json(todos)
	})

	app.post("/lab5/todos", (req,res)=>{
		const newTodo = {...req.body, id: new Date().getTime()}
		todos.push(newTodo)
		res.json(newTodo)
	})




	app.get("/lab5/todos/:id", (req,res)=>{
		const {id} = req.params
		const todo = todos.find(t=>t.id ===parseInt(id))
		res.json(todo)
	})

	app.get("/lab5/todos/:id/delete", (req,res)=>{
		const {id} = req.params
		console.log("delete id: "+ id + " | delete {id}: " + JSON.stringify({id}) )
		const todoIndex = todos.findIndex(t=>t.id===parseInt(id))
		todos.splice(todoIndex, 1)
		res.json(todos)
	})

	app.delete("/lab5/todos/:id", (req,res)=>{
		const {id} = req.params;
		const todoIndex = todos.findIndex(t=>t.id===parseInt(id))
		//error handling 3.6.4 added
		if (todoIndex === -1) {
			res.status(404).json({message:`Unable to delete Todo with ID ${id}`})
			return
		}
		todos.splice(todoIndex, 1)
		res.sendStatus(200)
	})

	app.get("/lab5/todos/:id/title/:title", (req,res)=>{
		const {id, title} = req.params
		const todo = todos.find(t=> t.id === parseInt(id))
		todo.title = title
		res.json(todos)
	})

	app.put("/lab5/todos/:id", (req,res)=>{
		const {id} = req.params
		//error handling added 3.6.4
		const todoIndex = todos.findIndex(t=> t.id === parseInt(id))
		if(todoIndex === -1){
			res.status(404).json({message: `Unable to update Todo with ID ${id}`})
		}

		todos = todos.map(t=> {
			if(t.id === parseInt(id)) {
				return {...t, ...req.body}
			}
			return t
		})
		res.sendStatus(200)
	})

	app.get("/lab5/todos/:id/completed/:completed", (req,res)=>{
		const {id, completed} = req.params
		const todo = todos.find(t=>t.id === parseInt(id))
		todo.completed = completed === "true"
		res.json(todos)
	})
	app.get("/lab5/todos/:id/description/:description", (req,res)=>{
		const {id, description} = req.params
		const todo = todos.find(t=>t.id === parseInt(id))
		todo.description = description
		res.json(todos)
	})
}