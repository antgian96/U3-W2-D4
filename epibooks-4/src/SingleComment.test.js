import { render, screen } from "@testing-library/react";
import CommentArea from "./CommentArea"; 

describe("CommentArea Component", () => {
  test("nessuna istanza di SingleComment viene renderizzata all'avvio", () => {
   
    render(<CommentArea asin={null} />);

   
    const commentInstance = screen.queryByText(/Ottimo libro!/i);

    expect(commentInstance).not.toBeInTheDocument();
  });
});
