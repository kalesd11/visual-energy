import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "../State/actionCreator";
import Curasole from "./Curasole";

const Home = () => {
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector((state) => state.energyData);
  useEffect(()=>{
    dispatch(fetchData())
  },[])
  return (
    <div className="container">
      {loading ?<div className="loader-container"><p className="loader m-5"></p></div>:
      <div className="d-grid row">
        <div className="col-md-10 col-sm-12">
        <Curasole/>
        </div>
      </div>
      }
    </div>
  );
};

export default Home;
