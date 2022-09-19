import { useEffect, useState } from "react";
import "./Home.css";
import Dog from "./Dog/Dog";
import { getDogImageUrl, getRandomDogFromBreed } from "./util/getDogImageUrl";
import SelectBreed from "./Dog/SelectBreed";
import { redirect, user } from "./services/firebase";

function Home() {
  const [dogUrl, setDogUrl] = useState("");
  const [dogBreed, setDogBreed] = useState("");

  async function changeDog() {
    if (dogBreed !== "") {
      const newDogUrl = await getRandomDogFromBreed(dogBreed);
      setDogUrl(newDogUrl);
    } else {
      const newDogUrl = await getDogImageUrl();
      setDogUrl(newDogUrl);
    }
  }

  function breedChangeHandler(breed) {
    setDogBreed(breed);
  }

  useEffect(() => {
    changeDog();
  }, [dogBreed]);

  return (
    <>
      <h1>Woof!</h1>
      <div className="wrapper">
        <SelectBreed breedChangeHandler={breedChangeHandler} />
        <Dog dog={dogUrl} changeDog={changeDog} />
      </div>
    </>
  );
}

export default Home;
