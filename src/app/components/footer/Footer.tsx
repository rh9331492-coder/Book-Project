
const Footer = () => {
    return (

        <footer className="relative overflow-hidden bg-slate-950 text-white">

            {/* Background Glow */}
            <div className="pointer-events-none absolute -left-32 -top-32 h-72 w-72 rounded-full bg-emerald-500/10 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-32 -right-32 h-72 w-72 rounded-full bg-cyan-500/10 blur-3xl" />

            <div className="relative mx-auto max-w-[1160px] px-4">

                {/* Newsletter */}
                <div className="border-b border-white/10 py-12">
                    <div className="flex flex-col items-center justify-between gap-6 md:flex-row">

                        <div>
                            <p className="mb-2 text-sm font-semibold uppercase tracking-[0.2em] text-emerald-400">
                                Stay Updated
                            </p>

                            <h2 className="text-2xl font-bold sm:text-3xl">
                                Get the latest books & updates
                            </h2>

                            <p className="mt-2 max-w-lg text-sm text-slate-400">
                                Subscribe to our newsletter and never miss new books,
                                recommendations, and special updates.
                            </p>
                        </div>

                        {/* Newsletter Form */}
                        <div className="flex w-full max-w-md overflow-hidden rounded-xl border border-white/10 bg-white/5 p-1 backdrop-blur-sm">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="min-w-0 flex-1 bg-transparent px-4 py-3 text-sm text-white outline-none placeholder:text-slate-500"
                            />

                            <button
                                className="
              rounded-lg bg-emerald-500 px-5 py-3
              text-sm font-semibold text-slate-950
              transition-all duration-300
              hover:bg-emerald-400
              hover:shadow-lg hover:shadow-emerald-500/20
              active:scale-95
            "
                            >
                                Subscribe
                            </button>
                        </div>

                    </div>
                </div>

                {/* Main Footer */}
                <div className="grid grid-cols-1 gap-10 py-14 sm:grid-cols-2 lg:grid-cols-4">

                    {/* Brand */}
                    <div>
                        <a
                            href="#"
                            className="inline-block text-2xl font-bold tracking-tight"
                        >
                            Book<span className="text-emerald-400">Nest</span>
                        </a>

                        <p className="mt-4 max-w-xs text-sm leading-6 text-slate-400">
                            Discover your next favorite book. Explore stories,
                            authors, and timeless collections all in one place.
                        </p>

                        {/* Social Icons */}
                        <div className="mt-6 flex gap-3">

                            <a
                                href="#"
                                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-sm transition-all duration-300 hover:-translate-y-1 hover:border-emerald-400/40 hover:bg-emerald-400 hover:text-slate-950"
                            >
                                f
                            </a>

                            <a
                                href="#"
                                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-sm transition-all duration-300 hover:-translate-y-1 hover:border-emerald-400/40 hover:bg-emerald-400 hover:text-slate-950"
                            >
                                𝕏
                            </a>

                            <a
                                href="#"
                                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-sm transition-all duration-300 hover:-translate-y-1 hover:border-emerald-400/40 hover:bg-emerald-400 hover:text-slate-950"
                            >
                                in
                            </a>

                            <a
                                href="#"
                                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-sm transition-all duration-300 hover:-translate-y-1 hover:border-emerald-400/40 hover:bg-emerald-400 hover:text-slate-950"
                            >
                                ◎
                            </a>

                        </div>
                    </div>

                    {/* Explore */}
                    <div>
                        <h3 className="mb-5 font-semibold">
                            Explore
                        </h3>

                        <ul className="space-y-3 text-sm text-slate-400">

                            <li>
                                <a
                                    href="/"
                                    className="transition-colors hover:text-emerald-400"
                                >
                                    Home
                                </a>
                            </li>

                            <li>
                                <a
                                    href="/books"
                                    className="transition-colors hover:text-emerald-400"
                                >
                                    All Books
                                </a>
                            </li>

                            <li>
                                <a
                                    href="/categories"
                                    className="transition-colors hover:text-emerald-400"
                                >
                                    Categories
                                </a>
                            </li>

                            <li>
                                <a
                                    href="/authors"
                                    className="transition-colors hover:text-emerald-400"
                                >
                                    Authors
                                </a>
                            </li>

                        </ul>
                    </div>

                    {/* Support */}
                    <div>
                        <h3 className="mb-5 font-semibold">
                            Support
                        </h3>

                        <ul className="space-y-3 text-sm text-slate-400">

                            <li>
                                <a
                                    href="/about"
                                    className="transition-colors hover:text-emerald-400"
                                >
                                    About Us
                                </a>
                            </li>

                            <li>
                                <a
                                    href="/contact"
                                    className="transition-colors hover:text-emerald-400"
                                >
                                    Contact
                                </a>
                            </li>

                            <li>
                                <a
                                    href="/faq"
                                    className="transition-colors hover:text-emerald-400"
                                >
                                    FAQ
                                </a>
                            </li>

                            <li>
                                <a
                                    href="/privacy"
                                    className="transition-colors hover:text-emerald-400"
                                >
                                    Privacy Policy
                                </a>
                            </li>

                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h3 className="mb-5 font-semibold">
                            Get In Touch
                        </h3>

                        <div className="space-y-4 text-sm text-slate-400">

                            <p className="flex gap-3">
                                <span className="text-emerald-400">✉</span>
                                hello@booknest.com
                            </p>

                            <p className="flex gap-3">
                                <span className="text-emerald-400">☎</span>
                                +880 1234-567890
                            </p>

                            <p className="flex gap-3">
                                <span className="text-emerald-400">⌖</span>
                                Dhaka, Bangladesh
                            </p>

                        </div>
                    </div>

                </div>

                {/* Bottom */}
                <div className="flex flex-col gap-4 border-t border-white/10 py-6 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between">

                    <p>
                        © 2026 BookNest. All rights reserved.
                    </p>

                    <div className="flex gap-5">
                        <a
                            href="/terms"
                            className="transition-colors hover:text-white"
                        >
                            Terms
                        </a>

                        <a
                            href="/privacy"
                            className="transition-colors hover:text-white"
                        >
                            Privacy
                        </a>

                        <a
                            href="/cookies"
                            className="transition-colors hover:text-white"
                        >
                            Cookies
                        </a>
                    </div>

                </div>

            </div>
        </footer>

    )
}

export default Footer
