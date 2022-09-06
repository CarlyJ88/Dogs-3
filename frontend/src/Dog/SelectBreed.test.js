import { render, screen } from "@testing-library/react";
import SelectBreed from "./SelectBreed";
import userEvent from "@testing-library/user-event";
import { getDogBreeds } from "../util/getDogImageUrl";

jest.mock("../util/getDogImageUrl");

describe("select breed", () => {
  beforeEach(() => {
    getDogBreeds.mockResolvedValue({
      husky: [],
      sheepdog: ["english", "shetland"],
      terrier: [],
    });
  });

  it("breed is not in selected state when not selected", async () => {
    render(<SelectBreed breedChangeHandler={() => {}} />);

    expect(await screen.findByText("terrier")).toHaveClass("dog-breed");
    expect(await screen.findByText("terrier")).not.toHaveClass(
      "dog-breed-selected"
    );
  });

  it("breed is hghlighted when selected", async () => {
    render(<SelectBreed breedChangeHandler={() => {}} />);
    userEvent.click(await screen.findByText("terrier"));
    expect(await screen.findByText("terrier")).toHaveClass(
      "dog-breed-selected"
    );
    expect(await screen.findByText("sheepdog")).not.toHaveClass(
      "dog-breed-selected"
    );
  });

  it("calls with selected breed", async () => {
    const handleClick = jest.fn();
    render(<SelectBreed breedChangeHandler={handleClick} />);
    userEvent.click(await screen.findByText("terrier"));

    expect(handleClick).toHaveBeenCalledWith("terrier");
  });
});
