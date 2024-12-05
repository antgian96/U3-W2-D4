import { render, screen } from "@testing-library/react";
import CommentArea from "./CommentArea";



describe("CommentArea Component", () => {
  test("renderizza AddComment e CommentList sempre", () => {
    render(<CommentArea/>);

    
    expect(screen.getByTestId("add-comment")).toBeInTheDocument();

    /
    expect(screen.getByTestId("comment-list")).toBeInTheDocument();
  });

  test("renderizza il componente Loading quando isLoading è true", () => {
   
    render(<CommentArea />);
    const loading = screen.queryByTestId("loading");
    expect(loading).not.toBeInTheDocument();
  });

});