import "./SelectBreed.css";
import { getDogBreeds } from "../util/getDogImageUrl";
import { useState, useEffect } from "react";

function SelectBreed(props) {
  const [breeds, setBreeds] = useState([]);
  const [selectedBreed, setSelectedBreed] = useState(""); // move this out...

  async function availableBreeds() {
    const newBreed = await getDogBreeds(); // add error handling
    setBreeds(Object.keys(newBreed));
  }

  function selectBreed(breed) {
    setSelectedBreed(breed);
    props.breedChangeHandler(breed);
  }

  useEffect(() => {
    availableBreeds();
  }, []);

  return (
    <>
      <div className="Select-breed-wrapper" data-testid="dog-breed">
        <div className="breed-wrapper">
          {breeds.map((breed, i) => (
            <div
              key={i}
              className={
                breed === selectedBreed
                  ? "dog-breed dog-breed-selected"
                  : "dog-breed"
              }
              onClick={() => {
                selectBreed(breed);
              }}
            >
              {breed}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default SelectBreed;
