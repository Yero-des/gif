import { useState } from "react"

function AddVariation({number, functionMinus, functionPlus, variationPlus, variationMinus}) {
  return (    
    <div className="container mt-3">
      <div className="row justify-content-center">
        <div className="col-auto">
          <h3 className="text-danger fs-4">Sube o aumenta el numero a tu preferencia</h3>
        </div>
      </div>
      <div className="row justify-content-center mt-4">
        <input type="button" className="col-2 btn btn-warning" value={`-${variationPlus}`} onClick={functionMinus}></input>
        <h2 className="col-2 text-secondary text-center">{number}</h2>
        <input type="button" className="col-2 btn btn-success" value={`+${variationMinus}`} onClick={functionPlus}></input>
      </div>
    </div>
  );
}

export function PlusOrLess () {

  const [number, setNumber] = useState(0);
  const [number2, setNumber2] = useState(2);
  const [number3, setNumber3] = useState(10);
  const [number4, setNumber4] = useState(100);
  const [number5, setNumber5] = useState(1000);

  const AddNumber= (setVar, add) => {
    setVar((number) => number + add);
  }
  const MinusNumber = (setVar, less) => {
    setVar((number) => number - less);
  }

  return (
    <>
      <AddVariation 
        number={number}
        functionPlus={() => AddNumber(setNumber, 1)}
        functionMinus={() => MinusNumber(setNumber, 1)} 
        variationPlus={1}
        variationMinus={1}
      />
      <AddVariation 
        number={number2}
        functionPlus={() => AddNumber(setNumber2, 2)}
        functionMinus={() => MinusNumber(setNumber2, 2)} 
        variationPlus={2}
        variationMinus={2}
      />
      <AddVariation 
        number={number3}
        functionPlus={() => AddNumber(setNumber3, 10)}
        functionMinus={() => MinusNumber(setNumber3, 10)} 
        variationPlus={10}
        variationMinus={10}
      />
      <AddVariation 
        number={number4}
        functionPlus={() => AddNumber(setNumber4, 100)}
        functionMinus={() => MinusNumber(setNumber4, 100)} 
        variationPlus={100}
        variationMinus={100}
      />
      <AddVariation 
        number={number5}
        functionPlus={() => AddNumber(setNumber5, 1000)}
        functionMinus={() => MinusNumber(setNumber5, 1000)} 
        variationPlus={1000}
        variationMinus={1000}
      />
    </>
  )

}