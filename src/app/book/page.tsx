import { Ibook } from "@/app/types/book.type";
import BookCard from "../components/navber/BookCard";
import Link from "next/link";

const getBooks = async () => {
    const response = await fetch('http://localhost:3000/booksData.json');
    const data = await response.json()
    return data;
}
const BooksPage = async () => {
    const booksData = await getBooks()
    // console.log(booksData)
    
    return (

        <section className="bg-[#020618] px-4 py-20">
            <div className="mx-auto mb-12 max-w-[1160px] text-center">
                {/* Small Badge */}
                <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-orange-500/30 bg-orange-500/10 px-4 py-2 text-sm font-semibold text-orange-400">
                    <span className="h-2 w-2 animate-pulse rounded-full bg-orange-500"></span>
                    Explore Our Collection
                </div>

                {/* Title */}
                <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl">
                    Discover Your Next
                    <span className="ml-2 text-orange-500">
                        Favorite Book
                    </span>
                </h2>

                {/* Description */}
                <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-400 sm:text-lg">
                    Explore our carefully selected collection of books and
                    find something interesting to read today.
                </p>

                {/* Dynamic Book Count */}
                <div className="mt-6 flex items-center justify-center gap-3">
                    <span className="rounded-full bg-orange-500 px-4 py-2 text-sm font-semibold text-white">
                        {booksData.length}+ Books Available
                    </span>

                    <span className="rounded-full border border-slate-700 bg-slate-900 px-4 py-2 text-sm font-medium text-slate-300">
                        Updated Collection
                    </span>
                </div>

            </div>

            {/* Books Grid */}
            <div className="mx-auto grid max-w-[1160px] grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">

                {booksData.slice(0, 9).map((data: Ibook) => (
                    <BookCard
                        key={data.bookId}
                        data={data}
                    />
                ))}

            </div>

            {/* Bottom Button */}
            {booksData.length > 9 && (
                <div className="mt-12 text-center">
                        <button
                            className="
          rounded-xl bg-orange-500 px-7 py-3.5
          font-semibold text-white
          shadow-lg shadow-orange-500/20
          transition-all duration-300
          hover:-translate-y-1
          hover:bg-orange-600
          hover:shadow-xl
          active:translate-y-0
        "
                        >
                            View All Books →
                        </button>
                </div>
            )}

        </section>

    )
}

export default BooksPage
