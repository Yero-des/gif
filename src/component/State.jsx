import { useState } from "react";

function SetNumber() {

  let [num, setNum] = useState(1); // Update value, return 
  const sumar = () => {
    setNum(num + 1);
  };

  return (
    <div className="row">
      <div className="col">
        <button className="btn btn-secondary" onClick={sumar}>
          +1
        </button>
      </div>
      <div className="col">
        <h4 className="text-warning">{num}</h4>
      </div>
    </div>
  );

}

function SetString() {

  let [string, setString] = useState("Decir Hola:");

  const decirA = () => {
    setString((string) => string + " hola");
  };

  return (
    <div className="row mt-2">
      <div className="col">
        <button className="btn btn-secondary" onClick={decirA}>
          Decir A
        </button>
      </div>
      <div className="col">
        <h4 className="text-primary">{string}</h4>
      </div>
    </div>
  );
}

function SetNumberDouble () {

  let [num_double, setNum] = useState(1)
  const double = () => {
    setNum(num_double * 2);
  }

  return (
    <div className="row mt-2">
      <div className="col">
        <button className="btn btn-secondary" onClick={double}>
          Multiplicar por 2
        </button>
      </div>
      <div className="col">
        <h4 className="text-success">{num_double}</h4>
      </div>
    </div>
  );
}
// State
////////////////////////////////
export function State() {
  return (
    <div className="container mt-3">
      <SetNumber />
      <SetString />
      <SetNumberDouble />
    </div>
  );
}
