import { ReactComponent as Favourite } from "../icons/favourite-icon.svg";
import "./Favourite.css";

function Favourites(props) {
  return (
    <button role="button" className="Favourite-button">
      <Favourite
        title="Favourite Icon"
        className={
          props.favourite ? "Favourite-wrapper-selected" : "Favourite-wrapper"
        }
      />
    </button>
  );
}

export default Favourites;
