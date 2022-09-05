import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Home from "./Home";
import { getDogImageUrl } from "./util/getDogImageUrl";

jest.mock("./util/getDogImageUrl");

describe("Home", () => {
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
});
