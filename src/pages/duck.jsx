

import { useState } from "react";
import Axios from "axios";

export const Duckk = () => {
  const [Duck, setDuck] = useState("");

  const generateImage = () => {
    Axios.get("https://random-d.uk/api/v1/random").then((response) => {
      setDuck(response.data.url);
    });
  };

  return (
    <div>
      <button onClick={generateImage}>Get Duck</button>
      <img src={Duck} />
    </div>
  );
};