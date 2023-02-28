import "./Dog.css";
import Favourite from "./Favourite/Favourite";
import DogScore from "./Rating/DogScore";
import { getRating, getOverallRating, addRating } from "../services/service";
import { useState, useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../services/firebase";
import OverallScore from "./Rating/OverallScore";

function Dog(props) {
  const [score, setScore] = useState(0);
  const [user] = useAuthState(auth);
  const [overallRating, setOverallRating] = useState(0);

  useEffect(() => {
    async function callBack() {
      const score = await getRating(props.dogUrl, user?.uid);
      setScore(score);
      const rating = await getOverallRating(props.dogUrl);
      setOverallRating(Number(rating));
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
          <Favourite favourite={true} />
          {props.dogUrl && (
            <img src={props.dogUrl} alt="a dog" className="Dog-image" />
          )}
        </div>
        <div className="Button-wrapper">
          <button className="Home-button" onClick={props.onChangeDog}>
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
