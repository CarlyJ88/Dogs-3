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
      const rating = await getRating(props.dogUrl, user?.uid);
      setScore(rating);
      const overallRating = await getOverallRating(props.dogUrl);
      setOverallRating(Math.round(overallRating).toFixed(1));
    }
    callBack();
  }, [user?.uid, props.dogUrl]);

  function onScoreChange(score) {
    addRating(props.dogUrl, user?.uid, score);
    setScore(score);
  }

  return (
    <>
      <div className="Dog-wrapper">
        <div className="Image-wrapper">
          <Favourites favourite={true} />
          {props.dogUrl && (
            <img src={props.dogUrl} alt="a dog" className="Dog-image" />
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
