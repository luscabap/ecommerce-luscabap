import Header from "@/components/Header";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

describe("Component <Header />", () => {
  test("It should have a title", () => {
    render(<Header />);

    const title = screen.getByText("Site Doces");

    expect(title).toBeInTheDocument();
  });
});
