import React from "react";
import { Button } from "./Button";

export const Filter = props => {
  const years = [];
  for (let i = 2004; i <= 2020; i++) {
    years.push(i);
  }
  const launch = ["True", "False"];
  const land = ["True", "False"];

  const yearclick = year => {
    const items = props.duplist.filter(
      item => parseInt(item.launch_year) === year
    );

    props.setlist(items);
  };

  const launchclick = launch => {
    const bool = launch === "True" ? true : false;
    const items = props.duplist.filter(item => item.launch_success === bool);
    props.setlist(items);
  };

  const landclick = land => {
    const bool = land === "True" ? true : false;

    console.log(
      props.duplist[0].rocket.first_stage.cores[0].land_success,
      bool
    );
    const items = props.duplist.filter(
      item => item.rocket.first_stage.cores[0].land_success === bool
    );
    props.setlist(items);
    console.log(items);
  };

  return (
    <div className="container-fluid ">
      <h3>Filters</h3>
      <div className="header">Launch Year</div>
      <div className="row">
        {years.map(year => (
          <Button key={year} click={() => yearclick(year)} text={year} />
        ))}
      </div>
      <div className="header">Succesful Launch</div>
      <div className="row">
        {launch.map(launch => (
          <Button
            key={launch}
            click={() => launchclick(launch)}
            text={launch}
          />
        ))}
      </div>
      <div className="header">Succesful Landing</div>
      <div className="row">
        {land.map(land => (
          <Button key={land} click={() => landclick(land)} text={land} />
        ))}
      </div>
    </div>
  );
};
