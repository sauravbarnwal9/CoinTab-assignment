const express = require("express");
const { connection } = require("./config/db");
const { projectRouter } = require("./routes/project.route");
const fetch = require("node-fetch");
const cors=require('cors');
const ProjectModel = require("./model/project.model");

require("dotenv").config();
const PORT = process.env.PORT || 8080;
const app = express();
app.use(cors())

app.use(express.json());
app.use("/api", projectRouter);
app.get("/",((req,res)=>{
  res.status(201).send("<h1>Hello </h1> ")
}))
app.get("/getall",( async(req,res)=>{
    try {
        const result = await fetch("https://randomuser.me/api/?results=50");
        const body = await result.json();
       
        ProjectModel.insertMany(body.results, function (err, res) {
          if (err) throw err;
          console.log( res.insertedCount);
        });
        res.status(201).send({ message: "updated" });
      } catch (error) {
        console.log(error)
        res.status(404).send({ error: "something went wrong" });
      }
}))

app.listen(PORT, async () => {
  try {
    await connection;
    console.log("connected with database");
  } catch (error) {
    console.log(error);
  }
});
