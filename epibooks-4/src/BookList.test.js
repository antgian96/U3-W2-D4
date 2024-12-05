import { render, screen } from "@testing-library/react";
import BookList from "./BookList";

test("rende il numero corretto di card dei libri", () => {
  
  const mockBooks = [
    { asin: "1", title: "Libro 1" },
    { asin: "2", title: "Libro 2" },
    { asin: "3", title: "Libro 3" },
  ];

  
  render(<BookList books={mockBooks} />);

  
  const bookCards = screen.getAllByRole("article"); 
  
  expect(bookCards).toHaveLength(mockBooks.length);
});
