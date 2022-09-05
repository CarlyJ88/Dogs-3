import "./Dog.css";

function Dog(props) {
  return (
    <>
      <h1>Home page</h1>
      <div className="Dog-wrapper">
        {props.dog && <img src={props.dog} alt="a dog" className="Dog-image" />}
        {/* include breed name on alt later */}
        <button className="Home-button" onClick={props.changeDog}>
          Get a new Dog!
        </button>
      </div>
    </>
  );
}

export default Dog;
