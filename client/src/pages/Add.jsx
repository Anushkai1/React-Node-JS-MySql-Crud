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




}

export default Add