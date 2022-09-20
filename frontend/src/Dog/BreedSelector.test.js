import { render, screen } from "@testing-library/react";
import BreedSelector from "./BreedSelector";
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
    render(<BreedSelector onBreedChange={() => {}} selectedBreed={""} />);

    expect(await screen.findByText("terrier")).toHaveClass("dog-breed");
    expect(await screen.findByText("terrier")).not.toHaveClass(
      "dog-breed-selected"
    );
  });

  it("breed is highlighted when selected", async () => {
    render(
      <BreedSelector onBreedChange={() => {}} selectedBreed={"terrier"} />
    );
    userEvent.click(await screen.findByText("terrier")); // move this to home test
    expect(await screen.findByText("terrier")).toHaveClass(
      "dog-breed-selected"
    );
    expect(await screen.findByText("sheepdog")).not.toHaveClass(
      "dog-breed-selected"
    );
  });

  it("calls with selected breed", async () => {
    const handleClick = jest.fn();
    render(
      <BreedSelector onBreedChange={handleClick} selectedBreed={"terrier"} />
    );
    userEvent.click(await screen.findByText("terrier"));

    expect(handleClick).toHaveBeenCalledWith("terrier");
  });
});
