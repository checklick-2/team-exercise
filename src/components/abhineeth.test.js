import {render, screen} from "@testing-library/react";
import Abhineeth from "./abhineeth";

test("renders name correctly", () => {
    render(<Abhineeth/>);
    const linkElement = screen.getByText(/Abhineeth Adiraju/i);
    expect(linkElement).toBeInTheDocument();
});
