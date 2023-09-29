import { useState } from "react";

export const userSearchGif = () => {

  const [valorInput, setValorInput] = useState("Hello");
  const [gifs, setGifs] = useState([]);
  const [load, setLoad] = useState(false);

  const onSubmit = async (e) => {
    e.preventDefault();
    const gifsQuery = await getGifs(valorInput);
    setGifs(gifsQuery);
  };

  const onChange = (e) => {
    setValorInput(e.target.value);
  };

  const getGifs = async (query) => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=4IK2gSMH40XkKifCDL2Z9IrtbA5sORlQ&q=${query}`;
    setLoad(true)
    // await new Promise(resolve => {
    //   setTimeout(() => {
    //     resolve(true)
    //   }, 3000)
    // })
    const response = await fetch(url);
    const data = await response.json();
    setLoad(false)
    return data.data;
  };

  return {
    onSubmit,
    valorInput,
    onChange,
    gifs,
    load
  }

}