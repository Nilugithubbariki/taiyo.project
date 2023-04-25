import React from "react";
import "./app.css";
import Router from "./router/Router";
import { Link } from "react-router-dom";
import Form from "./form/Form";
const App = () => {
  return (
    <>
      <div className="wrapperContainer">
        <div className="topBar">Contact Page</div>
        <div className="midContainer">
          <div className="leftBar">
            <div className="contact">
              <Link to="/Contact" className="contactStyle">
                Contact
              </Link>
            </div>
            <div className="chart">
              <Link to="/Chart" className="chartStyle">
                Chart and Map
              </Link>
            </div>
          </div>
          <div className="rightBar">
            <Link to="/Form" className="contactstyle">
              Create Contact
            </Link>
            <Router />
          </div>
        </div>
      </div>
    </>
  );
};
export default App;
