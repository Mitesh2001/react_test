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

    test("Login Button renders correctly", () => {
        render(<Skills skills={skills} />)
        const loginButton = screen.getByRole('button', { name: 'Login' });
        expect(loginButton).toBeInTheDocument();
    });

    test("Start Learning Button is not renders", () => {
        render(<Skills skills={skills} />)
        const loginButton = screen.queryByRole('button', { name: 'Start Learning' });
        expect(loginButton).not.toBeInTheDocument();
    })

    test("Start Learning Button is eventually display", async () => {
        render(<Skills skills={skills} />)
        const loginButton = await screen.findByRole('button', { name: 'Start Learning' }, { timeout: 2000 });
        expect(loginButton).toBeInTheDocument();
    })

});