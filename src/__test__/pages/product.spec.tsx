import ProductPage from "@/pages/product";
import { render, screen } from "@testing-library/react";

describe("Product page", () => {
  it("render Product page", () => {
    const page = render(<ProductPage />);
    expect(page).toMatchSnapshot();
  });
});
