import React from "react";
export const Button = props => {
  return (
    <>
      <div className="col-5">
        <button className="style-button" onClick={props.click}>
          {props.text}
        </button>
      </div>
    </>
  );
};
