import { render, screen } from "@testing-library/react"
import Application from "./Application"

describe("Application", () => {
    test("renders correctly", () => {
        render(<Application />);

        const pageHeading = screen.getByRole("heading", {
            name: "Job Application Form",
            level: 1
        });
        expect(pageHeading).toBeInTheDocument();

        const sectionHeading = screen.getByRole("heading", {
            name: "Section 1",
            level: 2
        });
        expect(sectionHeading).toBeInTheDocument();

        const inputElement = screen.getByRole("textbox", {
            name: 'Name'
        });
        expect(inputElement).toBeInTheDocument();

        const inputElement2 = screen.getByLabelText("Name", {
            selector: "input"
        });
        expect(inputElement2).toBeInTheDocument();

        const paragraphElement = screen.getByText("All fields are mendatory", {
            selector: "p"
        });
        expect(paragraphElement).toBeInTheDocument();

        const inputElement3 = screen.getByPlaceholderText("FullName");
        expect(inputElement3).toBeInTheDocument();

        const inputElement4 = screen.getByDisplayValue("Mitesh");
        expect(inputElement4).toBeInTheDocument();

        const imageElement = screen.getByAltText("A person with a laptop");
        expect(imageElement).toBeInTheDocument();

        const closeElement = screen.getByTitle("close");
        expect(closeElement).toBeInTheDocument();

        const customElement = screen.getByTestId('custom-testId');
        expect(customElement).toBeInTheDocument();

        const bioElement = screen.getByRole("textbox", {
            name: 'Bio'
        });
        expect(bioElement).toBeInTheDocument();

        const jonLocationElement = screen.getByRole("combobox");
        expect(jonLocationElement).toBeInTheDocument();

        const termsElement = screen.getByRole("checkbox");
        expect(termsElement).toBeInTheDocument();

        const termsElement2 = screen.getByLabelText("I agree to terms and conditions");
        expect(termsElement2).toBeInTheDocument();

        const buttonElement = screen.getByRole("button");
        expect(buttonElement).toBeInTheDocument();
    })
})