import React from "react";

export const Card = props => {
  return (
    <div className="card m-2 p-1">
      <img src={props.img} className="card-img-top images" alt="..." />
      <div className="card-body">
        <div className="text-primary">
          {props.name}#{props.number}
        </div>
        <div>
          Mission Id's:<span className="text-primary">{props.id}</span>
        </div>
        <div>
          launch Year : <span className="text-primary">{props.year}</span>
        </div>
        <div>
          launch success : <span className="text-primary">{props.launch}</span>
        </div>
        <div>
          land success :<span className="text-primary">{props.land}</span>{" "}
        </div>
      </div>
    </div>
  );
};
