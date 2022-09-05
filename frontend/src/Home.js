import { useEffect, useState } from "react";
import "./Home.css";
import Dog from "./Dog/Dog";

function Home() {
  const [dogUrl, setDogUrl] = useState("");

  useEffect(() => {
    fetch("https://dog.ceo/api/breeds/image/random")
      .then((response) => response.json())
      .then((response) => {
        console.log(response);
        setDogUrl(response.message);
      });
  }, []);

  return (
    <>
      <Dog dog={dogUrl} />
    </>
  );
}

export default Home;
