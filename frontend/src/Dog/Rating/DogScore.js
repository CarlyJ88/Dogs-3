import StarButton from "./StarButton";

function DogScore(props) {
  function scoreChangeHandler(score) {
    props.onScoreChange(score);
  }
  const arr = [0, 1, 2, 3, 4];
  return (
    <>
      <p>My rating:</p>
      {arr.map((starIndex) => (
        <StarButton
          key={starIndex}
          rate={props.score > starIndex}
          score={starIndex + 1}
          onClick={scoreChangeHandler}
        />
      ))}
    </>
  );
}

export default DogScore;
