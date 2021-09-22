import {render, screen} from "@testing-library/react";
import Opey from "./opey";

test("renders opey's name correctly", () => {
    render(<Opey/>);
    const nameElement = screen.getByText(/Opey Adeyemi/i);
    expect(nameElement).toBeInTheDocument();
});
