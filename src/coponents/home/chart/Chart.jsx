import React, { useEffect, useState } from "react";
import axios from "axios";
const Chart = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios.get("https://disease.sh/v3/covid-19/countries").then((res) => {
      console.log(res);
      setData(res.data);
    });
  });
  return (
    <div>
      {data.map((item) => {
        return (
          <div>
            <div>{item.active}</div>
            <div>{item.activePerOneMillion}</div>
            <div>{item.cases}</div>
            <div>{item.casesPerOneMillion}</div>
            <div>{item.continent}</div>
            <div>{item.country}</div>
            <div>{item.critical}</div>
            <div>{item.criticalPerOneMillion}</div>
            <div>{item.deaths}</div>
            <div>{item.deathsPerOneMillion}</div>
          </div>
        );
      })}
    </div>
  );
};

export default Chart;
