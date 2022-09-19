import "./Dog.css";
import Favourites from "./Favourites";
import DogScore from "./DogScore";
import { getRating } from "../services/service";
import { useState, useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../services/firebase";

function Dog(props) {
  const [score, setScore] = useState("");
  const [user] = useAuthState(auth);

  useEffect(() => {
    async function becauseIhaveTo() {
      const rating = await getRating(props.dog, user?.uid);
      setScore(rating.data);
    }
    becauseIhaveTo();
  }, []);

  return (
    <>
      <div className="Dog-wrapper">
        <div className="Image-wrapper">
          <Favourites favourite={true} />
          {props.dog && (
            <img src={props.dog} alt="a dog" className="Dog-image" />
          )}
        </div>
        <div className="Button-wrapper">
          <button className="Home-button" onClick={props.changeDog}>
            Get a new Dog!
          </button>
        </div>
        <DogScore score={score} />
      </div>
    </>
  );
}

export default Dog;
