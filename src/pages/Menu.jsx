import { useState } from "react";
import Axios from "axios";

export const Menu = () => {
  const [fox, setFox] = useState("");

  const generateImage = () => {
    Axios.get("https://randomfox.ca/floof/").then((response) => {
      setFox(response.data.image);
    });
  };

  return (
    <div>
      <button onClick={generateImage}>Get fox</button>
      <img src={fox} />
    </div>
  );
};