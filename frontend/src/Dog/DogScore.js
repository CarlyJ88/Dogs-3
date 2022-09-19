import RateDog from "./RateDog";

function DogScore(props) {
  const arr = [0, 1, 2, 3, 4];
  return (
    <>
      {arr.map((starIndex) => (
        <RateDog key={starIndex} rate={props.score > starIndex} />
      ))}
    </>
  );
}

export default DogScore;
