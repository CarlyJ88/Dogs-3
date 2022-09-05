import { useEffect, useState } from "react";
import "./Home.css";
import Dog from "./Dog/Dog";
import { getDogImageUrl } from "./util/getDogImageUrl";

function Home() {
  const [dogUrl, setDogUrl] = useState("");

  async function changeDog() {
    const newDog = await getDogImageUrl(); // add error handling
    setDogUrl(newDog);
  }

  useEffect(() => {
    changeDog();
  }, []);

  return <Dog dog={dogUrl} changeDog={changeDog} />;
}

export default Home;
