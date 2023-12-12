import { render, screen } from "@testing-library/react";
import Greet from "./Greet";

describe("Greet", () => {
    test("Renders correctly", () => {
        render(<Greet />);
        const textElement = screen.getByText('Hello');
        expect(textElement).toBeInTheDocument();
    });
});

describe("Nested", () => {
    test("Name renders correctly", () => {
        render(<Greet name="Mitesh" />);
        const textElement = screen.getByText('Hello Mitesh');
        expect(textElement).toBeInTheDocument();
    });
});
