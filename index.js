import express  from "express";
// import userouts from "./router/routs.js"

const app = express()
app.use(express.json());


const port = 4000

// app.use('/users',userouts)

app.get("/",(req,res)=>{
        res.send("hello")
})


app.listen(port,()=>{console.log(`port working on ${port} `)})