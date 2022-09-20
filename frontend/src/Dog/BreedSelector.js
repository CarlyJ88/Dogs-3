import { getDogBreeds } from "../util/getDogImageUrl";
import { useState, useEffect } from "react";
import Breeds from "./Breeds";

function BreedSelector(props) {
  const [breeds, setBreeds] = useState([]);
  const [selectedBreed, setSelectedBreed] = useState(""); // move this out...

  async function availableBreeds() {
    const newBreed = await getDogBreeds(); // add error handling
    const breedNames = Object.keys(newBreed);
    setBreeds(breedNames);
  }

  function selectBreed(breed) {
    setSelectedBreed(breed);
    props.onBreedChange(breed);
  }

  useEffect(() => {
    availableBreeds();
  }, []);

  return (
    <Breeds
      breeds={breeds}
      selectBreed={selectBreed}
      selectedBreed={selectedBreed}
    />
  );
}

export default BreedSelector;
