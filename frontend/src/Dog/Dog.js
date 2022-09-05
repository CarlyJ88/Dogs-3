import "./Dog.css";

function Dog(props) {
  return (
    <>
      <h1>Home page</h1>
      <div className="Dog-wrapper">
        {props.dog && <img src={props.dog} className="Dog-image" />}
        <button className="Home-button">Get a new Dog!</button>
      </div>
    </>
  );
}

export default Dog;
