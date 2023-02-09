const mongoose=require('mongoose')
require('dotenv').config()
mongoose.set('strictQuery',false)
const connection =mongoose.connect('mongodb+srv://Saurav:Saurav@cluster0.em1bktx.mongodb.net/?retryWrites=true&w=majority')
module.exports={
    connection
}