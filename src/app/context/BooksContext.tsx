"use client"
import React, {createContext, useState} from 'react'

export const BooksContext = createContext({})
const BooksProvider = ({children}: {children: React.ReactNode}) => {
    const [readBook, setReadBook] = useState([])
    const [wishlist, setWishlist] = useState([])
    const sharedData = {
        readBook, setReadBook, 
        wishlist, setWishlist
    }
  return (
    <BooksContext.Provider value={sharedData}>
        {children}
    </BooksContext.Provider>
  )
}

export default BooksProvider


