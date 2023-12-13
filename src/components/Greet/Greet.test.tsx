import { render, screen } from "@testing-library/react";
import Greet from "./Greet";

describe("Greet", () => {
    test("Renders correctly", () => {
        render(<Greet />);
        const textElement = screen.getByText(/Hello/);
        expect(textElement).toBeInTheDocument();
    });
});

describe("Nested", () => {
    test("Name renders correctly", () => {
        const name = "Mitesh";
        render(<Greet name={name} />);
        const textElement = screen.getByText(`Hello ${name ? name : "Guest"}`);
        expect(textElement).toBeInTheDocument();
    });
});
