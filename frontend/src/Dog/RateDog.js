import { ReactComponent as Rate } from "../icons/rate-icon.svg";
import "./RateDog.css";

function RateDog(props) {
  return (
    <button className="Rate-button" onClick={() => props.onClick(props.score)}>
      <Rate
        title="Rate Icon"
        className={props.rate ? "Rate-wrapper-selected" : "Rate-wrapper"}
      />
    </button>
  );
}

export default RateDog;
