export const Search = ({ onSubmit, valorInput, onChange, onClear}) => {
  return (
    <form onSubmit={onSubmit}>
      <div className="row justify-content-center mb-3">
        <div className="col-auto">
          <input
            className="form-control"
            value={valorInput}
            onChange={onChange}
          />
        </div>
        <div className="col-auto">
          <button type="submit" className="btn btn-success">
            Search
          </button>
        </div> 
        <div className="col-auto">
          <button type="button" className="btn btn-primary" onClick={onClear}>
            Clear console
          </button>
        </div>  
      </div>
    </form>
  )
}
