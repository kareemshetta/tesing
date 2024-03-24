import { render, screen, expect } from "@testing-library/react";
import App from "../App";

// eslint-disable-next-line no-undef
test("renders instruction text", () => {
  render(<App />);
  const linkElement = screen.getByText(
    /Click on the Vite and React logos to learn more/i
  );
  console.log(linkElement);
  expect(linkElement).toBeInTheDocument();
});
