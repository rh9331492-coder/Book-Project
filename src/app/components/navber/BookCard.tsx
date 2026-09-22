import { Ibook } from "@/app/types/book.type";
import Link from "next/link";
interface IbookCard {
    data: Ibook
}

const BookCard = ({ data }: IbookCard) => {
    const {
        bookName,
        author,
        image,
        review,
        totalPages,
        rating,
        category,
        tags,
        publisher,
        yearOfPublishing,
    } = data;

    return (
        <div className="group overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">

            {/* Image */}
            <div className="relative h-[300px] overflow-hidden bg-gray-100">
                <img
                    src={image}
                    alt={bookName}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />

                {/* Category */}
                <span className="absolute left-4 top-4 rounded-full bg-black px-3 py-1 text-sm font-medium text-white">
                    {category}
                </span>

                {/* Rating */}
                <span className="absolute right-4 top-4 rounded-full bg-white px-3 py-1 text-sm font-semibold shadow">
                    ⭐ {rating}
                </span>
            </div>

            {/* Content */}
            <div className="p-5">

                {/* Book name */}
                <h2 className="text-xl font-bold text-gray-900">
                    {bookName}
                </h2>

                {/* Author */}
                <p className="mt-1 text-sm text-gray-500">
                    By {author}
                </p>

                {/* Review */}
                <p className="mt-4 line-clamp-3 text-sm leading-6 text-gray-600">
                    {review}
                </p>

                {/* Tags */}
                <div className="mt-4 flex flex-wrap gap-2">
                    {tags.map((tag) => (
                        <span
                            key={tag}
                            className="rounded-full bg-orange-100 px-3 py-1 text-xs font-medium text-orange-600"
                        >
                            #{tag}
                        </span>
                    ))}
                </div>

                {/* Book information */}
                <div className="mt-5 grid grid-cols-2 gap-3 border-t border-gray-200 pt-4">

                    <div>
                        <p className="text-xs text-gray-400">
                            Pages
                        </p>
                        <p className="font-semibold">
                            {totalPages}
                        </p>
                    </div>

                    <div>
                        <p className="text-xs text-gray-400">
                            Published
                        </p>
                        <p className="font-semibold">
                            {yearOfPublishing}
                        </p>
                    </div>

                    <div>
                        <p className="text-xs text-gray-400">
                            Publisher
                        </p>
                        <p className="font-semibold">
                            {publisher}
                        </p>
                    </div>

                    <div>
                        <p className="text-xs text-gray-400">
                            Category
                        </p>
                        <p className="font-semibold">
                            {category}
                        </p>
                    </div>

                </div>

                {/* Button */}
                <Link href={`/book/${data.bookId}`}>

                    <button
                        className="
    group/btn relative mt-5 w-full overflow-hidden
    rounded-xl border border-slate-700
    bg-slate-900
    px-5 py-3 font-semibold text-white
    shadow-lg shadow-slate-900/20
    transition-all duration-300

    hover:-translate-y-1
    hover:border-blue-500
    hover:bg-slate-800
    hover:shadow-xl hover:shadow-blue-500/20

    active:translate-y-0
  "
                    >
                        {/* Shine */}
                        <span
                            className="
      absolute inset-0
      -translate-x-full
      skew-x-12
      bg-gradient-to-r
      from-transparent
      via-white/10
      to-transparent
      transition-transform duration-700
      group-hover/btn:translate-x-full
    "
                        />

                        {/* Text */}
                        <span className="relative z-10 flex items-center justify-center gap-2">
                            View Details

                            <span className="transition-transform duration-300 group-hover/btn:translate-x-1">
                                →
                            </span>
                        </span>
                    </button>

                </Link>


            </div>
        </div>
    );
};

export default BookCard;
