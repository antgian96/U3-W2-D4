import { getByRole, render, screen } from "@testing-library/dom";
import Welcome from "../components/Welcome";

test ("vediamo se il componente Welcome è montato bene", () => {
    render (<Welcome/>)
    const  alertElement = screen.getByRole("alert");
    expect(alertElement).toBeInTheDocument();
    const heading = screen.getByRole("Benvenuto in Epibooks!");
    expect(heading).toBeInTheDocument()
});