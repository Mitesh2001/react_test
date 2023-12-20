import { render, screen } from "@testing-library/react";
import { Skills } from "./Skills";

describe("skills", () => {

    const skills = ['TS', 'JS', 'HTML', 'PHP'];

    test("renders correctly", () => {
        render(<Skills skills={skills} />);
        const listElement = screen.getByRole('list');
        expect(listElement).toBeInTheDocument();
    });

    test("render a list of skills", () => {
        render(<Skills skills={skills} />);
        const listElement = screen.getAllByRole('listitem');
        expect(listElement).toHaveLength(skills.length);
    });

});