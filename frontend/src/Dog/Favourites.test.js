import { render, screen } from "@testing-library/react";
import Favourites from "./Favourites";

describe("Favourites", () => {
  it("favourite icon is not in selected state when not favourited", async () => {
    render(<Favourites favourite={false} />);

    expect(screen.getByRole("button")).toHaveClass("Favourite-button");
    expect(screen.getByTitle("Favourite Icon")).toHaveClass(
      "Favourite-wrapper"
    );
    expect(screen.getByTitle("Favourite Icon")).not.toHaveClass(
      "Favourite-wrapper-selected"
    );
  });

  it("favourite icon is in selected state when favourited", async () => {
    render(<Favourites favourite={true} />);

    expect(screen.getByTitle("Favourite Icon")).toHaveClass(
      "Favourite-wrapper-selected"
    );
  });
});
