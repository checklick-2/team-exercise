import {render, screen} from "@testing-library/react";
import Mathew from "./mathew";

test("renders name correctly", () => {
  render(<Mathew/>);
  const nameElement = screen.getByText('Mathew de Vin');
  expect(nameElement).toBeInTheDocument();
});
