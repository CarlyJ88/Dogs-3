import "./Dog.css";
import Favourites from "./Favourites";

function Dog(props) {
  return (
    <>
      <div className="Dog-wrapper">
        <div className="Image-wrapper">
          <Favourites favourite={true} />
          {props.dog && (
            <img src={props.dog} alt="a dog" className="Dog-image" />
          )}
        </div>
        {/* include breed name on alt later */}
        <div className="Button-wrapper">
          <button className="Home-button" onClick={props.changeDog}>
            Get a new Dog!
          </button>
        </div>
      </div>
    </>
  );
}

export default Dog;
