import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import axios from "axios";
import Spinner from "../../Component/Spinner/Spinner";
import Jumbroton from "../../Component/Jumbroton/Jumbroton";

const Detail = () => {
  const history = useHistory();
  const { id } = useParams();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [data, setData] = useState(null);
  const back = () => {
    history.replace("/api");
  };

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      setInterval(async () => {
        await axios
          .get(`https://ghibliapi.herokuapp.com/films/${id}`)
          .then((response) => {
            setIsLoading(false);
            setData(response.data);
            setError(false);
          })
          .catch((error) => {
            setIsLoading(false);
            setError(true);
            setData(null);
            console.log(error);
          });
      }, 360000);
    };
    fetchData();
  }, [id]);

  let spinner = !isLoading ? null : <Spinner />;
  let errorMessage = !error ? null : "Unknown an error";
  let showData = !data ? null : <Jumbroton dataDetail={data} />;

  return (
    <div className="pt-3">
      <button className="btn btn-secondary" onClick={back}>
        Back
      </button>
      <h1>THIS IS DETAIL</h1>
      <div style={{ textAlign: "center" }}>{spinner}</div>
      <div style={{ textAlign: "center" }}>{errorMessage}</div>
      <div className="pt-3" style={{ textAlign: "center" }}>
        {showData}
      </div>
    </div>
  );
};

export default Detail;
