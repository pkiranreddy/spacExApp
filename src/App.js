import React, { useState, useEffect } from "react";

import { Filter } from "./components/Filters";
import { Card } from "./components/Card";
const App = () => {
  const [list, setlist] = useState([]);
  const [duplist, setduplist] = useState([]);

  useEffect(() => {
    fetch("https://api.spacexdata.com/v3/launches?limit=100")
      .then(res => res.json())
      .then(data => {
        setlist(data);
        setduplist(data);
      });
  }, []);

  return (
    <>
      <div className="container">
        <h2>SpacEx launch programs</h2>
        <div className="row">
          <div className="col-md-2 col-sm-6">
            <Filter
              list={list}
              setlist={setlist}
              duplist={duplist}
              setduplist={setduplist}
            />
          </div>
          <div className="col-md-10  ">
            <div className="row ">
              {list &&
                list.map(item => (
                  <Card
                    key={item.flight_number}
                    img={item.links.mission_patch_small}
                    number={item.flight_number}
                    name={item.mission_name}
                    id={item.mission_id}
                    year={item.launch_year}
                    launch={`${item.launch_success}`}
                    land={`${item.rocket.first_stage.cores[0].land_success}`}
                  />
                ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
