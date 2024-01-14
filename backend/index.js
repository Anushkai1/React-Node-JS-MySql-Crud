import express from 'express';
import mysql from 'mysql';
import cors from 'cors';
const app = express()

const db = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"test"
})

app.use(express.json())
app.use(cors())

app.get("/", (req,res)=>{
    res.json(
        "<h1>sdsdsdsdsd</h1>" 
    )
})






app.listen(8800, ()=>{
    console.log("Connected to backend")
})