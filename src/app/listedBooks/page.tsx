"use client"
import React, { useContext, useState } from 'react'
import { BooksContext } from '../context/BooksContext'
import BookCard from '../components/navber/BookCard'
import { Ibook } from '../types/book.type'

const ListedBooks = () => {
    const { readBook, wishlist } = useContext(BooksContext)
    const [sortBy , setSortBy] = useState<'rating' | 'pages' | 'year'>('rating')
    console.log(readBook, "readBooks from listed page", wishlist, "wish list add from other ")
    return (
        <div className="mx-auto max-w-[1180px] px-4 py-12">

            {/* Section Header */}
            <div className="mb-8 text-center">
                <span className="mb-3 inline-block rounded-full bg-orange-100 px-4 py-1.5 text-sm font-semibold text-orange-600">
                    📚 My Library
                </span>

                <h2 className="text-4xl font-extrabold tracking-tight text-slate-800 md:text-5xl">
                    Listed Books
                </h2>

                <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-slate-500 md:text-base">
                    Keep track of the books you have read and the books you want to
                    read next.
                </p>
                <select
                value={sortBy}
                onChange={(e)=> setSortBy(e.target.value as 'rating' | 'pages' | 'year')}
                 defaultValue="Pick a Framework" className="select select-info">
                    <option disabled={true}>sort by</option>
                    <option>reating</option>
                    <option>pages</option>
                    <option>year</option>
                </select>
            </div>

            {/* Tabs */}
            <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-xl shadow-slate-200/60">

                {/* Tab Buttons */}
                <div className="border-b border-slate-200 bg-slate-50 px-4 pt-4 md:px-6">

                    <div className="tabs tabs-lift">

                        {/* Read Books */}
                        <input
                            type="radio"
                            name="my_tabs_3"
                            className="tab font-semibold"
                            aria-label={`Read Books (${readBook.length})`}
                            defaultChecked
                        />

                        <div className="tab-content border-base-300 bg-white p-5 md:p-8">

                            {/* Header */}
                            <div className="mb-6 flex flex-wrap items-center justify-between gap-3">

                                <div>
                                    <h3 className="text-xl font-bold text-slate-800">
                                        Read Books
                                    </h3>

                                    <p className="text-sm text-slate-500">
                                        Books you have finished reading
                                    </p>
                                </div>

                                <span className="rounded-full bg-green-100 px-4 py-2 text-sm font-bold text-green-700">
                                    {readBook.length} Books
                                </span>
                            </div>

                            {/* Books */}
                            {readBook.length > 0 ? (
                                <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                                    {readBook.map((data: Ibook) => (
                                        <BookCard
                                            key={data.bookId}
                                            data={data}
                                        />
                                    ))}
                                </div>
                            ) : (
                                <div className="flex min-h-[250px] flex-col items-center justify-center rounded-2xl border border-dashed border-slate-300 bg-slate-50 px-5 text-center">
                                    <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-orange-100 text-3xl">
                                        📖
                                    </div>

                                    <h3 className="text-lg font-bold text-slate-700">
                                        No Read Books
                                    </h3>

                                    <p className="mt-1 max-w-sm text-sm text-slate-500">
                                        You haven't added any books to your read list yet.
                                    </p>
                                </div>
                            )}
                        </div>

                        {/* Wishlist */}
                        <input
                            type="radio"
                            name="my_tabs_3"
                            className="tab font-semibold"
                            aria-label={`Wishlist (${wishlist.length})`}
                        />

                        <div className="tab-content border-base-300 bg-white p-5 md:p-8">

                            {/* Header */}
                            <div className="mb-6 flex flex-wrap items-center justify-between gap-3">

                                <div>
                                    <h3 className="text-xl font-bold text-slate-800">
                                        Wishlist
                                    </h3>

                                    <p className="text-sm text-slate-500">
                                        Books you want to read later
                                    </p>
                                </div>

                                <span className="rounded-full bg-orange-100 px-4 py-2 text-sm font-bold text-orange-600">
                                    {wishlist.length} Books
                                </span>
                            </div>

                            {/* Books */}
                            {wishlist.length > 0 ? (
                                <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                                    {wishlist.map((data: Ibook) => (
                                        <BookCard
                                            key={data.bookId}
                                            data={data}
                                        />
                                    ))}
                                </div>
                            ) : (
                                <div className="flex min-h-[250px] flex-col items-center justify-center rounded-2xl border border-dashed border-slate-300 bg-slate-50 px-5 text-center">

                                    <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-orange-100 text-3xl">
                                        ❤️
                                    </div>

                                    <h3 className="text-lg font-bold text-slate-700">
                                        No Wishlist Books
                                    </h3>

                                    <p className="mt-1 max-w-sm text-sm text-slate-500">
                                        Your wishlist is empty. Start adding books you
                                        would love to read.
                                    </p>
                                </div>
                            )}
                        </div>

                    </div>
                </div>
            </div>
        </div>


    )
}

export default ListedBooks
