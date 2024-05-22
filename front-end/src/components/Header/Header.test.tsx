import Header from "@/components/Header";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

describe("Component <Header />", () => {
  test("It should have a title", () => {
    const textHeader = "Site Doces";
    render(<Header titulo={textHeader}/>);

    const title = screen.getByTestId("title");

    expect(title).toHaveTextContent(textHeader);
  });
});
