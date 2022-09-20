function OverallScore(props) {
  return <div>Overall rating: {props.score?.toFixed(1)}</div>;
}

export default OverallScore;
