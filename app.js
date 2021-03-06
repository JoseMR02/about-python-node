const express = require("express");
const app = express();
app.engine('html', require('ejs').renderFile);
app.use(express.static("public"));
// let firstName = faker.name.firstName();
// let lastName = faker.name.lastName();
// let jobTitle = faker.name.jobTitle();
// let prefix = faker.name.prefix(); 
// let suffix = faker.name.suffix();
// let jobArea = faker.name.jobArea();
var current = true;
//routes
app.get("/", function(req, res){
	res.render("index.html", {data: current})
});
app.get("/upsides", function(req, res){
	res.render("upsides.html")
});
app.get("/downsides", function(req, res){
	res.render("downsides.html")
});
app.get("/history", function(req, res){
	//let person = {"jobTitle": jobTitle, "prefix": prefix; }
	res.render("history.html")
});

//server listener
app.listen("8081", "127.0.0.1", function(){
	console.log("Express Server is Running...");
});

//app.listen(process.env.PORT, process.env.IP, function(){
//	console.log("Running Express Server...");
//})