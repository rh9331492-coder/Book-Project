"use client"
import { BooksContext } from '@/app/context/BooksContext'
import { Ibook } from '@/app/types/book.type'
import React, { useContext } from 'react'
import { toast } from 'react-toastify'

const WishList = ({book}: {book: Ibook}) => {
    const {wishlist, setWishlist} = useContext(BooksContext)
    const HandleAddToWish = () => {
        setWishlist([...wishlist, book])
        toast.success(`clicked read button ${book.bookName}`)
    }
    return (
        <button
            onClick={() => HandleAddToWish()}
            className="
    group/btn relative overflow-hidden rounded-xl
    bg-gradient-to-r from-bule-500 to-red-600
    px-6 py-3
    text-sm font-bold text-black
    shadow-md shadow-black-200
    transition-all duration-300
    hover:-translate-y-1
    hover:scale-105
    hover:shadow-xl hover:shadow-orange-300
    active:scale-95
  "
        >
            {/* Shine Animation */}
            <span
                className="
      absolute inset-0
      -translate-x-full
      bg-gradient-to-r
      from-transparent
      via-white/30
      to-transparent
      transition-transform duration-700
      group-hover/btn:translate-x-full
    "
            />

            {/* Button Content */}
            <span className="relative flex items-center gap-2">
                WishList

                <span
                    className="
        text-lg
        transition-transform duration-300
        group-hover/btn:translate-x-1
      "
                >
                    →
                </span>
            </span>
        </button>
    )
}

export default WishList
