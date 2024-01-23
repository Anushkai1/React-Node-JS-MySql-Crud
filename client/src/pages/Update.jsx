import axios from "axios";
import React from "react";
import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Update = () => {

  const [book,setBook]=useState({
    title:"",
    dec:"",
    pic:""
  });

  const [error,setError] = useState(false);

  const navigate = useNavigate();
  const location = useLocation().pathname.split("/")[2];

  const handleChange = (e)=>{
    setBook((prev)=>({...prev, [e.target.name]:e.target.value}))
  }

  console.log(location);

  const handleClick = async (e) => {

  };

}

export default Update