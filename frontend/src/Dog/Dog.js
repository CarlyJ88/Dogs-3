import "./Dog.css";
import Favourites from "./Favourites";
import DogScore from "./DogScore";
import { getRating, getOverallRating, addRating } from "../services/service";
import { useState, useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../services/firebase";
import OverallScore from "./OverallScore";

function Dog(props) {
  const [score, setScore] = useState("");
  const [user] = useAuthState(auth);
  const [overallRating, setOverallRating] = useState("");

  useEffect(() => {
    async function callBack() {
      const rating = await getRating(props.dog, user?.uid);
      setScore(rating.data);
      const overallRating = await getOverallRating(props.dog);
      setOverallRating(overallRating);
      setOverallRating(5);
    }
    callBack();
  }, [user?.uid, props.dog]);

  function onScoreChange(score) {
    addRating(props.dog, user?.uid, score);
    setScore(score);
  }

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
        <DogScore
          score={score}
          overallRating={overallRating}
          onScoreChange={onScoreChange}
        />
        <OverallScore score={overallRating} />
      </div>
    </>
  );
}

export default Dog;
