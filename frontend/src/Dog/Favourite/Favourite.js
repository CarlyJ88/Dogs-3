import { ReactComponent as Heart } from "../../icons/heart-icon.svg";
import "./Favourite.css";

function Favourite(props) {
  return (
    <button role="button" className="Favourite-button">
      <Heart
        title="Heart Icon"
        className={
          props.favourite ? "Favourite-wrapper-selected" : "Favourite-wrapper"
        }
      />
    </button>
  );
}

export default Favourite;
