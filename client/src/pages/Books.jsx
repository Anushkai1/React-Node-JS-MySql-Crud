import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const Books = () => {
    const [books, setBooks] = useState([])

    useEffect(()=>{
        const fetachAllBooks = async()=>{
            try{
                const res = await axios.get("http://localhost:8800/books")
                setBooks(res.data);
            }catch(err){
                console.log(err)
            }
        }
        fetachAllBooks()
    },[])
        
const handleDelete = async (id)=>{

}

}

export default Books