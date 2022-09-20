import { render, screen } from "@testing-library/react";
import Favourite from "./Favourite";

describe("Favourite", () => {
  it("favourite icon is not in selected state when not favourited", async () => {
    render(<Favourite favourite={false} />);

    expect(screen.getByRole("button")).toHaveClass("Favourite-button");
    expect(screen.getByTitle("Heart Icon")).toHaveClass("Favourite-wrapper");
    expect(screen.getByTitle("Heart Icon")).not.toHaveClass(
      "Favourite-wrapper-selected"
    );
  });

  it("favourite icon is in selected state when favourited", async () => {
    render(<Favourite favourite={true} />);

    expect(screen.getByTitle("Heart Icon")).toHaveClass(
      "Favourite-wrapper-selected"
    );
  });
});
