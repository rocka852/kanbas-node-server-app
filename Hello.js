export default function Hello(app) {
	console.log("Hello World!");

	app.get("/hEllo", (req,res)=>{res.send("Life is good")})
	//this is case insensitive because every charactor will be transform to lowercase
	app.get("/", (req,res)=>res.send("Welcome to Full Stack Development"))
}
