const express=require("express")
const route =require('./Route')
const cors=require("cors")
const app=express()
app.use(express.json())
app.use(cors())
app.use( route) 

app.listen(8000,()=>{
    console.log("Server Started")
})