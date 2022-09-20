import "./Breeds.css";

function Breeds(props) {
  return (
    <div className="Select-breed-wrapper" data-testid="dog-breed">
      <ul className="breed-wrapper">
        {props.breeds.map((breed, i) => (
          <li
            key={i}
            className={
              breed === props.selectedBreed
                ? "dog-breed dog-breed-selected"
                : "dog-breed"
            }
            onClick={() => {
              props.selectBreed(breed);
            }}
          >
            {breed}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Breeds;
