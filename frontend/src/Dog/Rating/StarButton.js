import { ReactComponent as Star } from "../../icons/star-icon.svg";
import "./StarButton.css";

function StarButton(props) {
  return (
    <button className="Star-button" onClick={() => props.onClick(props.score)}>
      <Star
        title="Star Icon"
        className={props.rate ? "Star-wrapper-selected" : "Star-wrapper"}
      />
    </button>
  );
}

export default StarButton;
