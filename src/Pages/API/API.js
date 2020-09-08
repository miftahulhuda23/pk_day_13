import React, { useState } from "react";
import axios from "axios";
import Table from "../../Component/Table/Table";

const API = () => {
  const [films, setFilms] = useState([]);
  const fetchAPI = async () => {
    await axios
      .get("https://ghibliapi.herokuapp.com/films")
      .then((response) => {
        setFilms(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <h1>API page</h1>
      <button className="btn btn-primary" onClick={fetchAPI}>
        Fetch
      </button>
      <Table data={films} />
    </div>
  );
};

export default API;
