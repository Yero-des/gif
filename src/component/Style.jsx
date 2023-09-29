export function Fade() {

  const articles = [
    {name: "Article 1"},
    {name: "Article 2"},
    {name: "Article 3"},
    {name: "Article 4"}
  ];

  const handleHideArticle = (e) => {
    e.target.parentNode.classList.add("hidden")
  }

  return (
    <div className="container m-3">
      <section className="d-grid section">
        {articles.map((article, index) => (
        <article className="card" key={index}>
          <button className="card-btn" onClick={handleHideArticle}>X</button>
          <div className="card-info">
            <p className="title">{article.name}</p>
          </div>
        </article>
        ))}
      </section>
    </div>
  )
}

export function Array() {
  
  const people = ['Yeromi','Aurelio','Jennifer','Christopher','Luis','Rivaldo']
  const handleHideArticle = (e) => {
    e.target.parentNode.classList.add("hidden")
  }

  return (
    <div className="container m-3"> 
      <div className="row justify-content-center">
        {people.map((person, index) => (
        <article className="col-auto card" key={index}>
          <button className="card-btn" onClick={handleHideArticle}>X</button>
          <p className="text-danger fs-2">{person}</p>
        </article>
        ))}
      </div>
    </div>
  )
}

export function Animation() {
  return (
    <div className="container mt-3">
      <div className="circle"></div>
    </div>
  )
}