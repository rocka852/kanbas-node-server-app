import * as dao from "./dao.js"

let currentUser = null
export default function UserRoutes(app) {
	const createUser = async(req,res) =>{}
	const deleteUser = async (req, res) => {
      const status = await dao.deleteUser(req.params.userId)
      res.json(status)
  };
  const findAllUsers = async (req, res) => { 
      const {role, name} = req.query
      //console.log("role is: " + role)
      if (role) {

        const users = await dao.findUsersByRole(role);
          //console.log(users)
        res.json(users)
        return
      }  
      if (name) {
        const users = await dao.findUsersByPartialName(name)
        res.json(users)
        return
      }      
      const users = await dao.findAllUsers()
      res.json(users)
  };
  const findUserById = async (req, res) => { 
      console.log("req.params is: " + JSON.stringify(req.params))
      console.log("req.params.userId is: " + req.params.userId)
      //req.params is: {"userId":"666f7817c11886f8745f587e"}
      //req.params.userId is: 666f7817c11886f8745f587e
      /*
      if (req.params.userId.length == 3){
        console.log(req.params.userId + "length 3")
        let temp = parseInt(req.params.userId)//without let this won't work
        const user = await dao.findUserById(temp)
        res.json(user)
        return
      }*/
      const user = await dao.findUserById(req.params.userId)
      res.json(user)
  };
  //const updateUser = async (req, res) => { 
  const updateUser = async(req, res) => {
          const {userId} = req.params;
          const status = await dao.updateUser(userId, req.body)
          res.json(status)
      }
  
  const signup = async (req, res) => { };
  const signin = async (req, res) => { };
  const signout = (req, res) => { };
  const profile = async (req, res) => { };
  app.post("/api/users", createUser)
  app.get("/api/users", findAllUsers)
  app.get("/api/users/:userId", findUserById)
  app.put("/api/users/:userId", updateUser)
  app.delete("/api/users/:userId", deleteUser)
  app.post("/api/users/signup", signup)
  app.post("/api/users/signin", signin)
  app.post("/api/users/signout", signout)
  app.post("/api/users/profile", profile)
}