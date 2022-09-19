import RateDog from "./RateDog";

function DogScore(props) {
  function onScoreChange(score) {
    props.onScoreChange(score);
  }
  const arr = [0, 1, 2, 3, 4];
  return (
    <>
      <p>My rating:</p>
      {arr.map((starIndex) => (
        <RateDog
          key={starIndex}
          rate={props.score > starIndex}
          score={starIndex + 1}
          onClick={onScoreChange}
        />
      ))}
    </>
  );
}

export default DogScore;
