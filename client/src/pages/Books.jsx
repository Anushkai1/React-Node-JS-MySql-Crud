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
    try{
        await axios.delete("http://localhost:8800/delete/"+id);
        window.location.reload();
    }catch(err){
        console.log(err);
    }
}
  return (
    <div> 
        <h1>BooK Shop</h1>
        <div className='books'>
            {books.map(book=>(

            ))}
        </div> 
   
    </div>
  );
}

export default Books