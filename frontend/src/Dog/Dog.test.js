import Dog from "./Dog";

import { render, screen, fireEvent } from "@testing-library/react";

describe("Dog", () => {
  it("Displays image of a dog", () => {
    render(<Dog dog={"fake url"} />);
    expect(screen.getByAltText("a dog")).toBeInTheDocument();
    expect(screen.getByAltText("a dog")).toHaveAttribute("src", "fake url");
  });

  it("Does not display image of dog when url is not passed in", () => {
    render(<Dog dog={undefined} />);
    expect(screen.queryByAltText("a dog")).not.toBeInTheDocument();
  });

  it("Can display new dog when button is clicked", () => {
    const handleClick = jest.fn();
    render(<Dog dog={"fake url"} changeDog={handleClick} />);
    fireEvent.click(screen.getByText("Get a new Dog!"));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it("has favourite icon", () => {
    render(<Dog dog={undefined} />);

    expect(screen.getByTitle("Favourite Icon")).toBeInTheDocument();
  });
});
