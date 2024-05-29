
const NewsLetter = () => {
    return (
        <div className="shadow-md container mx-auto my-16  border poppin flex flex-col lg:flex-row gap-4">
            <div className="flex justify-around lg:w-1/2 py-3 md:py-8">
                <div className="flex flex-col items-center justify-center" data-aos="zoom-in" data-aos-duration="1000">
                    <h1 className="text-2xl md:text-3xl font-bold">5K+</h1>
                    <p className="sub-clr text-lg font-semibold">Active users</p>
                </div>
                <div className="flex flex-col items-center justify-center" data-aos="zoom-in" data-aos-duration="1000">
                    <h1 className="text-2xl md:text-3xl font-bold poppin">200+</h1>
                    <p className="sub-clr text-lg font-semibold">Posts</p>
                </div>
                <div className="flex flex-col items-center justify-center" data-aos="zoom-in" data-aos-duration="1000">
                    <h1 className="text-2xl md:text-3xl font-bold poppin">1200+</h1>
                    <p className="sub-clr text-lg font-semibold">Reviews</p>
                </div>

            </div>
            <div className="lg:w-1/2 bg-gray-100 py-3 md:py-8">
                <section className=" py-12">
                    <div className="max-w-4xl mx-auto px-4">
                        <h2 className="text-3xl font-semibold text-gray-800 mb-4">
                            Subscribe to our Newsletter
                        </h2>
                        <form  className="flex items-center">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="border outline-none border-gray-300 px-4 py-2 rounded-l-md  flex-1"
                            />
                            <button
                                type="submit"
                                className="bgClr2 text-white px-6 py-2 rounded-r-md hover:bgClr "
                            >
                                Subscribe
                            </button>
                        </form>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default NewsLetter;