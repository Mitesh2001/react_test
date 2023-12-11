import { render, screen } from "@testing-library/react";
import Greet from "./Greet";

test("Greet renders correctly", () => {
    render(<Greet />);
    const textElement = screen.getByText('Hello');
    expect(textElement).toBeInTheDocument();
});

test("Greet name renders correctly", () => {
    render(<Greet name="Mitesh" />);
    const textElement = screen.getByText('Hello Mitesh');
    expect(textElement).toBeInTheDocument();
});