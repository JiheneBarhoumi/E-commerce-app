import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import "../assets/search.css";

const SearchBox = ({ history }) => {
  const [keyword, setKeyword] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    setKeyword(e.target.value);
    if (keyword.trim()) {
      history.push(`/search/${keyword}`);
    } else {
      history.push("/");
    }
  };

  return (
    <div className="searchbox">
      <input
        type="text"
        name="q"
        onChange={(e) => submitHandler(e)}
        placeholder="Search Products..."
        className="mr-sm-2 ml-sm-5"
      ></input>
      <i className="fas fa-search"></i>
    </div>
  );
};

export default SearchBox;
