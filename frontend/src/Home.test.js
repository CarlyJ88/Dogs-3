import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Home from "./Home";
import {
  getDogImageUrl,
  getDogBreeds,
  getRandomDogFromBreed,
} from "./util/getDogImageUrl";

jest.mock("./util/getDogImageUrl");
jest.mock("./services/service");

describe("Home", () => {
  beforeEach(() => {
    getDogBreeds.mockResolvedValue({ terrier: [] });
  });
  it("Renders an image", async () => {
    getDogImageUrl.mockResolvedValue(
      "https://images.dog.ceo/breeds/terrier-american/n02093428_1482.jpg"
    );
    render(<Home />);
    expect(await screen.findByAltText("a dog")).toBeInTheDocument();
  });

  it("Image changes button is clicked", async () => {
    getDogImageUrl
      .mockResolvedValueOnce(
        "https://images.dog.ceo/breeds/terrier-american/n02093428_1482.jpg"
      )
      .mockResolvedValue(
        "https://images.dog.ceo/breeds/border-terrier/Zack.jpg"
      );
    render(<Home />);
    expect(await screen.findByAltText("a dog")).toHaveAttribute(
      "src",
      "https://images.dog.ceo/breeds/terrier-american/n02093428_1482.jpg"
    );
    userEvent.click(screen.getByText("Get a new Dog!"));
    await waitFor(async () =>
      expect(await screen.findByAltText("a dog")).toHaveAttribute(
        "src",
        "https://images.dog.ceo/breeds/border-terrier/Zack.jpg"
      )
    );
  });

  it("Correct breed image is displayed", async () => {
    getDogImageUrl.mockResolvedValue(
      "https://images.dog.ceo/breeds/terrier-american/n02093428_1482.jpg"
    );
    getRandomDogFromBreed.mockResolvedValue(
      "https://images.dog.ceo/breeds/border-terrier/Zack.jpg"
    );
    render(<Home />);
    userEvent.click(await screen.findByText("terrier"));
    await waitFor(async () =>
      expect(await screen.findByAltText("a dog")).toHaveAttribute(
        "src",
        "https://images.dog.ceo/breeds/border-terrier/Zack.jpg"
      )
    );
  });

  it("Correct breed image is displayed 2", async () => {
    getDogImageUrl.mockResolvedValue(
      "https://images.dog.ceo/breeds/terrier-american/n02093428_1482.jpg"
    );
    getRandomDogFromBreed
      .mockResolvedValueOnce(
        "https://images.dog.ceo/breeds/border-terrier/Zack.jpg"
      )
      .mockResolvedValue(
        "https://images.dog.ceo/breeds/border-terrier/Ruby.jpg"
      );
    render(<Home />);
    userEvent.click(await screen.findByText("terrier"));
    await waitFor(async () =>
      expect(await screen.findByAltText("a dog")).toHaveAttribute(
        "src",
        "https://images.dog.ceo/breeds/border-terrier/Zack.jpg"
      )
    );
    userEvent.click(await screen.findByText("Get a new Dog!"));
    await waitFor(async () =>
      expect(await screen.findByAltText("a dog")).toHaveAttribute(
        "src",
        "https://images.dog.ceo/breeds/border-terrier/Ruby.jpg"
      )
    );
  });
});
