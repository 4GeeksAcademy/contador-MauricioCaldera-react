import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import Counter from "./components/Counter";

const root = ReactDOM.createRoot(document.getElementById("root"));

let counter = 0;

setInterval(() => {
  const six = Math.floor(counter / 100000) % 10;
  const five = Math.floor(counter / 10000) % 10;
  const four = Math.floor(counter / 1000) % 10;
  const three = Math.floor(counter / 100) % 10;
  const two = Math.floor(counter / 10) % 10;
  const one = Math.floor(counter / 1) % 10;

  counter++;

  root.render(
    <React.StrictMode>
      <Counter
        digitSix={six}
        digitFive={five}
        digitFour={four}
        digitThree={three}
        digitTwo={two}
        digitOne={one}
      />
    </React.StrictMode>,
  );
}, 1000);
