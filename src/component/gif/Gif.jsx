import { Search } from "./Search";
import { GridGifs } from "./GridGifs";
import { userSearchGif } from "../../hocks/useSearchGif";
import '../../css/Gif.css'

export function Gif() {

  const {onSubmit, valorInput, onChange, onClear, gifs, load} = userSearchGif();

  return (
    <div className="container mt-3 d-flex flex-column justify-content-center align-items-center">

      <Search
        onSubmit={onSubmit}
        valorInput={valorInput}
        onChange={onChange} />
      
      {
        load 
        ? (<h2 className="text-light fw-bold"> Cargando... </h2>) 
        : (
          <GridGifs
            gifs={gifs} />
        )
      }
      
    </div>
  );
}
