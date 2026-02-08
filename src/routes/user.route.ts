import express from "express";
const app = express()

app.use(express.json())

app.get('/home',(req,res)=>{
    res.json({
        msg : "fetched home page"
    }).status(200)
})

const PORT = process.env.PORT

app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`)
})
