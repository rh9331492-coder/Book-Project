import Image from 'next/image'
import Link from 'next/link'
import logo from '@/app/assets/book.ico'

const Navber = () => {
    const links = <>
        <li><Link href='/'>Home</Link></li>
        <li><Link href='/book'>Books</Link></li>
        <li><Link href='/listedBooks'>Listed</Link></li>
        <li><Link href='/readBooks'>Read</Link></li>
    </>
    return (
        <nav>
            <div className="navbar mx-auto max-w-[1180px] shadow-sm">

                {/* Left */}
                <div className="navbar-start">

                    {/* Mobile Menu */}
                    <div className="dropdown">
                        <div
                            tabIndex={0}
                            role="button"
                            className="btn btn-ghost lg:hidden"
                        >
                            <svg
                                aria-label="Menu"
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16"
                                />
                            </svg>
                        </div>

                        <ul
                            tabIndex={-1}
                            className="menu menu-sm dropdown-content rounded-box z-1 mt-3 w-52 p-2 shadow"
                        >
                            {links}
                        </ul>
                    </div>

                    {/* Logo */}
                    <Image
                        src={logo}
                        alt="Book logo"
                        width={40}
                        height={40}
                    />
                </div>

                {/* Desktop Menu */}
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {links}
                    </ul>
                </div>

                {/* Buttons */}
                <div className="navbar-end gap-2">
                    <button className="btn btn-success">
                        Sign In
                    </button>

                    {/* animated button */}
                    <button
                        className="
                             group relative overflow-hidden
                             rounded-xl bg-gradient-to-r from-red-500 to-amber-950
                             px-6 py-3 font-semibold text-white
                             shadow-lg shadow-orange-500/30
                              transition-all duration-300
                              hover:-translate-y-1
                              hover:shadow-xl hover:shadow-orange-500/40
                              active:translate-y-0
                           "
                         >
                        <span className="relative z-10 flex items-center gap-2">
                            Sign Up
                            <span className="transition-transform duration-300 group-hover:translate-x-1">
                                →
                            </span>
                        </span>

                        {/* Hover animation */}
                        <span
                            className="
                                  absolute inset-0
                                  -translate-x-full
                                  bg-white/40
                                  skew-x-12
                                  transition-transform duration-500
                                  group-hover:translate-x-full
                                "
                        />
                    </button>

                    {/*  */}
                </div>

            </div>
        </nav>
    )
}

export default Navber
