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

app.get("/books", (req,res)=>{
    const q = "select * from book"
    db.query(q,(err,data)=>{
        if(err) return res.json(err)
        return res.json(data)
    })
})

app.post("/books", (req, res) => {
    const q = "INSERT INTO `book`( `title`, `dec`, `pic`) VALUES (?)";
  


  });




app.listen(8800, ()=>{
    console.log("Connected to backend")
})