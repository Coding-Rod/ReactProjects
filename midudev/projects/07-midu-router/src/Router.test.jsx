import { describe, it, expect, beforeEach, vi } from "vitest";
import { render, screen, cleanup, fireEvent } from "@testing-library/react";
import { Router } from "./Router";
import { Route } from "./Route.jsx"
import { Link } from "./Link.jsx"

import { getCurrentPath } from "./utils";

vi.mock('./utils.js', () => ({
  getCurrentPath: vi.fn()
}))

describe("Router", () => {
  beforeEach(() => {
    // Before each test
    cleanup(); // Clean screen
    vi.clearAllMocks() // Clear vitest mocks
  });

  it("should render without problems", () => {
    render(<Router routes={[]} />);
    expect(true).toBeTruthy();
  });

  it("should render 404 if no routes match", () => {
    render(<Router routes={[]} defaultComponent={() => <h1>404</h1>} />);
    // screen.debug(); // This will print the resuting DOM
    expect(screen.getByText("404")).toBeTruthy();
  });

  it("Should render the component of the first route that matches", () => {
    getCurrentPath.mockReturnValue('/about')

    const routes = [
      {
        path: "/",
        Component: () => <h1>Home</h1>,
      },
      {
        path: "/about",
        Component: () => <h1>About</h1>,
      },
    ];

    render(<Router routes={routes} />);
    expect(screen.getByText("About")).toBeTruthy();
  });

  it('should navigate using Links', async () => {
    getCurrentPath.mockReturnValueOnce('/')

    render(
      <Router>
        <Route
          path='/' Component={() => {
            return (
              <>
                <h1>Home</h1>
                <Link to='/about'>Go to About</Link>
              </>
            )
          }}
        />
        <Route path='/about' Component={() => <h1>About</h1>} />
      </Router>
    )

    // Click on the link
    const anchor = screen.getByText(/Go to About/)
    fireEvent.click(anchor)

    const aboutTitle = await screen.findByText('About')

    // Check that the new route is rendered
    expect(aboutTitle).toBeTruthy()
  })
});
