import axios from "axios";
import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export const Add = () => {
  const [book, setBook] = useState({
    title: "",
    desc: "",
    price: null,
    cover: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setBook((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  console.log(book);

  const handleClick = async (e) => {
    e.preventDefault();
    try{
        await axios.post("http://localhost:8800/books", book);
        navigate('/')
    }
    catch(err){
        console.log(err);
    }
  }

  return (
    <div className="form">
      <h1>Add new book</h1>
      <input
        type="text"
        placeholder="Book title"
        onChange={handleChange}
        name="title"
      />
      <textarea
        rows={5}
        type="text"
        placeholder="Book desc"
        onChange={handleChange}
        name="desc"
      />
      <input
        type="number"
        placeholder="Book price"
        onChange={handleChange}
        name="price"
      />
      <textarea
        type="text"
        placeholder="Book cover"
        onChange={handleChange}
        name="cover"
      />
      <button className="formButton" onClick={handleClick}>Add</button>
      <Link to="/">See all books</Link>
    </div>
  );
};
