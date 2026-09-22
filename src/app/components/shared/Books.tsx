import { Ibook } from "@/app/types/book.type";
import BookCard from "../navber/BookCard";

const getBooks = async () => {
  const response = await fetch('http://localhost:3000/booksData.json');
  const data = await response.json()
  return data;
}
const BooksPage = async () => {
  const booksData = await getBooks()
  console.log(booksData)
  return (
    <div className="mx-auto grid max-w-[1160px] grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {booksData.map((data:Ibook) => (
        <BookCard
          data={data}
          key={data.bookId}
        />
      ))}
    </div>
  )
}

export default BooksPage
