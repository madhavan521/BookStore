const mongoose=require("mongoose")
mongoose.connect("mongodb://127.0.0.1:27017/bookstore")
.then(()=>{
    console.log("Database connected")
})
.catch((err)=>{
    console.log(err)
})
const bookSchema =mongoose.Schema({
    name:String,
    imageurl:String,
    author:String,
    releaseDate:String,
    publisher:String

})
const books = mongoose.model("Books", bookSchema);
module.exports = books