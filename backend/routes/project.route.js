const {Router}=require('express')
const { allData, getData, deleteData, getAll } = require('../controller/project.controller')
const projectRouter=Router()


projectRouter.get("/alldata",allData)
projectRouter.get("/data",getData)
projectRouter.delete("/delete",deleteData)

module.exports={
    projectRouter
}