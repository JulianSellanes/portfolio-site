import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { Home } from "./Home.jsx";

// Mock Blocks so the grid layout doesn't matter for the test
jest.mock("../components/Blocks.jsx", () => ({
    __esModule: true,
    Blocks: ({ children }) => <div data-testid="blocks">{children}</div>,
}));

// Mock PixelCard to a simple div that shows the title
jest.mock("../components/PixelCard.jsx", () => ({
    __esModule: true,
    PixelCard: ({ title }) => <div>{title}</div>,
}));

describe("Home page", () => {
    test("Renders the main title and mission paragraph", () => {
    // Clear localStorage so JSON.parse(...) is safe
    window.localStorage.clear();

    render(
        <MemoryRouter>
        <Home projects={[]} />
        </MemoryRouter>
    );

    expect(
        screen.getByRole("heading", { name: /welcome to my portfolio/i })
    ).toBeInTheDocument();

    // Match just the start of the mission text (your file has some ... in the middle)
    expect(
        screen.getByText(/mission: my mission/i)
    ).toBeInTheDocument();
    });

    test("Renders project cards when projects are provided", () => {
    const projects = [
        {
            title: "Test Project",
            subtitle: "Just for testing",
            img: "/test.png",
            techs: ["React"],
            link: "#",
        },
    ];

    render(
        <MemoryRouter>
        <Home projects={projects} />
        </MemoryRouter>
    );

    expect(screen.getByText("Test Project")).toBeInTheDocument();
    });
});