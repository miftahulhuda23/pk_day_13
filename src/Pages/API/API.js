import React, { useState, useEffect } from "react";
import axios from "axios";
import Table from "../../Component/Table/Table";

const API = () => {
  const [starWar, setStarWar] = useState([]);
  const fetchAPI = () => {
    axios
      .get("https://swapi.dev/api/people/")
      .then((response) => {
        // console.log(response.data.results);
        const data = response.data.results;
        setStarWar(data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    fetchAPI();
  }, []);

  return (
    <div>
      <h1>API page</h1>
      {/* <button className="btn btn-primary" onClick={fetchAPI}>
        Fetch
      </button> */}
      <Table starWar={starWar} />
    </div>
  );
};

export default API;
