import { useState } from "react";

// Form
// **************************/

// Function form interactive
function FormInteractive() {

  const [valorInput, setValorInput] = useState("");
  const onChange = (evento) => {
    const valor = evento.target.value;
    setValorInput(valor);
  };

  return (
    <div className="row mt-2">
      <div className="col">
        <input
          className="form-control"
          value={valorInput}
          onChange={(e) => onChange(e)}
        />
      </div>
      <div className="col">
        <h4 className="text-secondary">{valorInput}</h4>
      </div>
    </div>
  );
}

export function Form() {
  return (
    <div className="container mt-3">
      <FormInteractive />
    </div>
  );
}

// Counter
// **************************/

// Function change
function ChangeValue(props) {
  return (
    <div className="row mt-2">
      <div className="col">
        <button className="btn btn-secondary" onClick={props.onClick}>
          {props.btn_name}
        </button>
      </div>
      <div className="col">
        <h4 className="text-primary">{props.counter}</h4>
      </div>
    </div>
  );
}

// Function person
function ChangeValuePerson(props) {
  return (
    <div className="row mt-2">
      <div className="col">
        <button className="btn btn-secondary" onClick={props.onClick}>
          {props.btn_name}
        </button>
      </div>
      <div className="col">
        <h4 className="text-primary">{props.counter.name}</h4>
        <h4 className="text-primary">{props.counter.age}</h4>
        <h4 className="text-primary">{props.counter.gender === "F" ? "Femenino" : "Masculino"}</h4>
      </div>
    </div>
  );
}

export function Counter() {

  // Add
  const [counter, setCounter] = useState(0);
  const Add = () => {
    setCounter((estado) => estado + 1);
  };

  // Welcome
  const [welcome, setWelcome] = useState("");
  const Welcome = () => {
    if (attemps) {
      setWelcome((welcome) => welcome + "Bienvenido a mi pagina web");
      setAttemp(false);
    }
  };

  // Update person
  const [person, setPerson] = useState({ name: "Yeromi", age: 19, gender: "M"});
  const [attemps, setAttemp] = useState(true);
  const [attempsPerson, setPersonAttemp] = useState(1);
  const [nextPerson, setNextPerson] = useState("Siguiente persona");

  const listPerson = [
    { name: "Yeromi", age: 19 , gender: "M"},
    { name: "Aurelio", age: 22 , gender: "M"},
    { name: "Arturo", age: 12 , gender: "M"},
    { name: "William", age: 25 , gender: "M"},
    { name: "Yenifer", age: 14 , gender: "F"},
    { name: "Ana", age: 18 , gender: "F"},
    { name: "Ernesto", age: 21 , gender: "M"},
    { name: "Mario", age: 12 , gender: "M"},
    { name: "Juan", age: 34 , gender: "M"},
    { name: "Cristian", age: 23 , gender: "M"},
  ];

  const UpdatePerson = () => {

    listPerson.forEach((person, index) => {

      if (attempsPerson == listPerson.length){  

        setNextPerson("Siguiente persona");
        setPerson(listPerson[0]);
        setPersonAttemp(1);
        return

      }

      if (attempsPerson == index && index >= 1) {
        
        if (attempsPerson + 1 == listPerson.length) {
          setNextPerson("Volver al original");     
        } else {
          setNextPerson("Siguiente persona");
        }

        setPerson(person);
        setPersonAttemp((attemp) => attemp + 1);

      }

    })  
    
  };

  return (
    <div className="container mt-3">
      <ChangeValue btn_name={"Aumentar 1"} onClick={Add} counter={counter} />
      <ChangeValue
        btn_name={"Bienvenida"}
        onClick={Welcome}
        counter={welcome}
      />
      <ChangeValuePerson
        btn_name={nextPerson}
        onClick={UpdatePerson}
        counter={person}
      />
    </div>
  );
}
