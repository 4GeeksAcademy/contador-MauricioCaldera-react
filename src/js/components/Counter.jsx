import React from "react";

function Counter(props) {
  return (
    <>
      <div className="container bg-dark text-white d-flex justify-content-center py-3 fs-1">
        <div className="clock">
          <i className="fa-regular fa-clock"></i>
        </div>
        <div className="six bg-secondary rounded mx-1 p-3 fs-1">
          {props.digitSix} {/* Antes era digitsix */}
        </div>
        <div className="five bg-secondary rounded mx-1 p-3 fs-1">
          {props.digitFive} {/* Antes era digitfive */}
        </div>
        <div className="four bg-secondary rounded mx-1 p-3 fs-1">
          {props.digitFour}
        </div>
        <div className="tree bg-secondary rounded mx-1 p-3 fs-1">
          {props.digitThree}{" "}
          {/* Cambié digittree a digitThree para que coincida */}
        </div>
        <div className="two bg-secondary rounded mx-1 p-3 fs-1">
          {props.digitTwo}
        </div>
        <div className="one bg-secondary rounded mx-1 p-3 fs-1">
          {props.digitOne}
        </div>
      </div>
    </>
  );
}

export default Counter;
