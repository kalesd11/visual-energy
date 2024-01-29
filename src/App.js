import "./App.css";
import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min";
import { Provider } from "react-redux";
import store from "./State/store";
import { Route, Routes } from "react-router";
import LineChart from "./Components/LineChart";
import BarChart from "./Components/BarChart";
import PieChart from "./Components/PieChart";
import Relevance from "./Components/Relevance";
import Region from "./Components/Region";
import Topic from "./Components/Topic";
import Year from "./Components/Year";
import LoginPage from "./Components/LoginPage";
function App() {
  return (
   <div className="App">
     <Provider store={store}>
      <Navbar />
      <Routes>
        <Route path="/" Component={LoginPage} />
        <Route path="/home" Component={Home} />
        <Route path="/intensity" Component={LineChart} />
        <Route path="/country" Component={BarChart} />
        <Route path="/likelihood" Component={PieChart} />
        <Route path="/relevance" Component={Relevance} />
        <Route path="/region" Component={Region} />
        <Route path="/topic" Component={Topic} />
        <Route path="/year" Component={Year} />
        <Route path="*" Component={Home} />
      </Routes>
    </Provider>
   </div>
  );
}

export default App;
