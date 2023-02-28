import { getDogBreeds } from "../../util/getDogImageUrl";
import { useState, useEffect } from "react";
import Breeds from "./Breeds";

function BreedSelector(props) {
  const [breeds, setBreeds] = useState([]);

  async function availableBreeds() {
    const newBreed = await getDogBreeds(); // add error handling
    const breedNames = Object.keys(newBreed);
    setBreeds(breedNames);
  }

  function selectBreedHandler(breed) {
    props.onBreedChange(breed);
  }

  useEffect(() => {
    availableBreeds();
  }, []);

  return (
    <Breeds
      breeds={breeds}
      onSelectBreed={selectBreedHandler}
      selectedBreed={props.selectedBreed}
    />
  );
}

export default BreedSelector;
