// Codigo dinamico
///////////////////////////////

function Curriculum(props) {
  return (
    
    <div className="row">
      <div className="col">
        <h2>Mi nombre es <b className="text-danger">{ props.name } { props.last_name }</b></h2>
        <h2>Soy <b className="text-secondary">{ props.ocupation }</b></h2>
      </div>
      <div className="col">
        <h2>Tengo <b className="text-success">{ props.years_old }</b> años</h2>
        <h2>Tengo <b className="text-success">{ props.experience }</b> años de experiencia</h2>
      </div>
    </div>
    
  )
}

function Languages(props) {
  return (
    <>
    <h2>Mis <b className="text-warning">lenguajes</b> son:</h2>
    
    <table className="table table-dark" border={1}>
      <thead>
        <tr>
          <td>{props.languages[0]}</td>
          <td>{props.languages[1]}</td>
          <td>{props.languages[2]}</td>
          <td>{props.languages[3]}</td>
          <td>{props.languages[4]}</td>
        </tr>
      </thead>
    </table>
    </>
  )
}

function Example(props) {
  return (
    <>
    <h2>Mis <b className="text-success">amigos</b> son:</h2>
    {props.friends.map((friend, index) => (
      <article key={index}>
        <hr className="m-0"/>
        <div className="row align-items-center p-2">
          <div className="col-2">
            <h2 className="text-dark">{friend.name}</h2>
          </div>
          <div className="col-10">
            <h4 className="text-secondary">{friend.description}</h4>
          </div>
        </div>
      </article>
    ))}
    </>
  );
}

// Variables
///////////////////////////////
const person = {
  name: "Yeromi",
  last_name: "Zavala Castillo",
  ocupation: "Developer",
  experience: 2,
  years_old: 18,
  languages: ["PHP","Javascript","Python","Java","C++"],
  friends: [
    {
      name: "Ana",
      description: "Es una persona amable y tranquila, siempre optimista y feliz con quienes lo rodean"
    },
    {
      name: "Juan",
      description: "Es una persona callada y reservada, un poco enojon pero muy solidario"
    },
    {
      name: "Jaime",
      description: "Es una persona muy agresiva, aunque sus sentimientos son muy fragiles"
    },
    {
      name: "Jordi",
      description: "Es una persona amable y caritativa, siempre te ayuda con tus problemas"
    },
  ],
}

export function Presentation () {
    return (
        <div className="container mt-3">

          <Curriculum 
            name={person.name} 
            last_name={person.last_name}
            ocupation={person.ocupation}
            years_old={person.years_old}
            experience={person.experience}
            />
          <br/>
          <Languages
            languages={person.languages}
            />
          <br />
          <Example 
            friends={person.friends}
            />

        </div>
      );
}