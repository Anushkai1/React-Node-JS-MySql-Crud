import axios from "axios";
import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Add = () => {

  const [book,setBook]=useState({
    title:"",
    dec:"",
    pic:""
  });

  const [error,setError] = useState(false);

  const navigate = useNavigate();

  const handleChange = (e)=>{
    setBook((prev)=>({...prev, [e.target.name]:e.target.value}))
  }

  console.log(book);

  const handleClick = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:8800/books", book);
      navigate("/");
    } catch (err) {
      console.log(err);
      setError(true)
    }
  };


}

export default Add