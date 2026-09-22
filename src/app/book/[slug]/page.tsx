import ReadButton from "@/app/components/bookDetails/ReadButton";
import WishList from "@/app/components/bookDetails/wishlist";
import { Ibook } from "@/app/types/book.type";

interface paremsProps {
  params: Promise<{
    slug: string
  }>
}
const getBooks = async () => {
  const response = await fetch('http://localhost:3000/booksData.json');
  const data = await response.json()
  return data;
}
const DetailsPage = async ({ params }: paremsProps) => {
  const { slug } = await params
  console.log(slug)
  const bookData = await getBooks();
  const book = bookData.find((book: Ibook) => book.bookId === parseInt(slug)) as Ibook
  console.log(book)



  return (
    <section className="px-4 py-16">
      <div className="mx-auto max-w-[1180px]">

        {/* Section Header */}
        <div className="mb-10 text-center">
          <span className="mb-3 inline-block rounded-full bg-orange-100 px-4 py-1 text-sm font-semibold text-orange-600">
            Featured Book
          </span>

          <h2 className="text-3xl font-bold md:text-4xl">
            Discover Your Next Book
          </h2>

          <p className="mx-auto mt-3 max-w-2xl text-gray-500">
            Explore amazing books and find something interesting to read.
          </p>
        </div>

        {/* Card */}
        <div className="group relative mx-auto max-w-3xl overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-lg transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl">

          {/* Top Glow */}
          <div className="absolute left-1/2 top-0 h-1 w-0 -translate-x-1/2 bg-orange-500 transition-all duration-500 group-hover:w-full" />

          <div className="grid md:grid-cols-[320px_1fr]">

            {/* Image */}
            <div className="relative h-[420px] overflow-hidden bg-gray-100">

              <img
                src={book.image}
                alt={book.bookName}
                className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
              />

              {/* Image Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

              {/* Category */}
              <div className="absolute left-5 top-5">
                <span className="rounded-full bg-white/90 px-4 py-2 text-xs font-bold text-orange-600 shadow-lg backdrop-blur">
                  {book.category}
                </span>
              </div>

              {/* Rating */}
              <div className="absolute bottom-5 left-5 rounded-xl bg-black/60 px-4 py-2 text-sm text-white backdrop-blur">
                ⭐ {book.rating} / 5
              </div>

            </div>

            {/* Content */}
            <div className="flex flex-col justify-between p-7 md:p-9">

              <div>

                {/* Title */}
                <h2 className="text-3xl font-extrabold leading-tight text-gray-900 transition-colors duration-300 group-hover:text-orange-500">
                  {book.bookName}
                </h2>

                {/* Author */}
                <p className="mt-2 text-sm text-gray-500">
                  Written by{" "}
                  <span className="font-bold text-gray-800">
                    {book.author}
                  </span>
                </p>

                {/* Divider */}
                <div className="my-5 h-px bg-gray-200" />

                {/* Review */}
                <p className="line-clamp-3 text-sm leading-7 text-gray-600">
                  {book.review}
                </p>

                {/* Book Stats */}
                <div className="mt-6 grid grid-cols-3 gap-3">

                  <div className="rounded-2xl bg-orange-50 p-4 text-center">
                    <p className="text-xs text-gray-500">
                      Pages
                    </p>

                    <p className="mt-1 text-lg font-bold text-orange-600">
                      {book.totalPages}
                    </p>
                  </div>

                  <div className="rounded-2xl bg-blue-50 p-4 text-center">
                    <p className="text-xs text-gray-500">
                      Published
                    </p>

                    <p className="mt-1 text-lg font-bold text-blue-600">
                      {book.yearOfPublishing}
                    </p>
                  </div>

                  <div className="rounded-2xl bg-purple-50 p-4 text-center">
                    <p className="text-xs text-gray-500">
                      Rating
                    </p>

                    <p className="mt-1 text-lg font-bold text-purple-600">
                      ⭐ {book.rating}
                    </p>
                  </div>

                </div>

                {/* Tags */}
                <div className="mt-6 flex flex-wrap gap-2">
                  {book.tags?.map((tag: string, index: number) => (
                    <span
                      key={index}
                      className="rounded-full border border-gray-200 px-3 py-1 text-xs font-medium text-gray-600 transition-all duration-300 hover:border-orange-400 hover:bg-orange-50 hover:text-orange-600"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>

                {/* Publisher */}
                <div className="mt-5 text-sm text-gray-500">
                  Publisher:{" "}
                  <span className="font-semibold text-gray-800">
                    {book.publisher}
                  </span>
                </div>

              </div>

              {/* Bottom */}
              <div className="mt-7 flex items-center justify-between gap-4">

                <div>
                  <p className="text-xs text-gray-400">
                    Book Category
                  </p>

                  <p className="font-semibold text-gray-800">
                    {book.category}
                  </p>
                </div>

                {/* wish button */}
                <WishList book={book}></WishList>

                {/* animation button */}
                <ReadButton book={book}></ReadButton>
              </div>

            </div>
          </div>
        </div>

      </div>
    </section>
  )
}

export default DetailsPage
