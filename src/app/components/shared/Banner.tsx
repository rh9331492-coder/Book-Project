import heroImg from '@/app/assets/hero_img.jpg'
import Image from 'next/image'

const Banner = () => {
    return (
        <section className="bg-[#f5f1e8] py-16">
            <div className="mx-auto grid max-w-[1180px] items-center gap-10 px-6 md:grid-cols-2">

                <div>
                    <p className="mb-3 font-semibold uppercase tracking-widest text-orange-600">
                        Welcome to Book Haven
                    </p>

                    <h1 className="text-4xl font-bold text-gray-900 md:text-6xl">
                        Discover Your
                        <span className="block text-orange-600">
                            Favorite Books
                        </span>
                    </h1>

                    <p className="mt-5 max-w-lg text-gray-600">
                        Explore amazing stories, inspiring ideas and unforgettable
                        adventures. Find the perfect book for your next reading journey.
                    </p>

                    <button className="mt-7 rounded-lg bg-orange-600 px-7 py-3 font-semibold text-white hover:bg-orange-700">
                        Explore Books
                    </button>
                </div>

                <div>
                    <Image
                        src={heroImg}
                        alt="Books collection"
                        width={600}
                        height={600}
                        priority
                        className="rounded-2xl shadow-2xl"
                    />
                </div>

            </div>
        </section>
    )
}

export default Banner
