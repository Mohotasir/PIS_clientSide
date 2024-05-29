
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import img from '../../assets/nb3.png'
const UserReview = () => {
    const data = [
        {
            "id": 1,
            "productId": 1,
            "img":'https://i.postimg.cc/0yHh2Pqs/m1.jpg',
            "userName": "John Doe",
            "rating": 4.5,
            "comment": "Great alternative product! It exceeded my expectations and I highly recommend it.",
            "datePosted": "2024-05-20"
        },
        {
            "id": 2,
            "productId": 2,
            "img":'https://i.postimg.cc/zv5cPfTn/m2.jpg',
            "userName": "Jane Smith",
            "rating": 5,
            "comment": "I've been using this alternative for months now and it's been fantastic. Definitely worth trying out!",
            "datePosted": "2024-05-18"
        },
        {
            "id": 3,
            "productId": 1,
            "img" : 'https://i.postimg.cc/VsBT0jc4/m3.jpg',
            "userName": "Alice Johnson",
            "rating": 4,
            "comment": "The alternative product is good, but there are a few minor issues. Overall satisfied with the purchase.",
            "datePosted": "2024-05-16"
        },
        {
            "id": 4,
            "productId": 3,
            "img" : 'https://i.postimg.cc/3J0vbZJF/m4.jpg' ,
            "userName": "Michael Brown",
            "rating": 3.5,
            "comment": "Not bad, but could be better. I expected more features from this alternative.",
            "datePosted": "2024-05-15"
        },
        {
            "id": 5,
            "productId": 2,
            "img" : 'https://i.postimg.cc/3J0vbZJF/m4.jpg' ,
            "userName": "Sarah Wilson",
            "rating": 4,
            "comment": "Overall satisfied with the alternative product. It's reliable and easy to use.",
            "datePosted": "2024-05-14"
        },
        {
            "id": 6,
            "productId": 3,
            "userName": "David Lee",
            "img" : 'https://i.postimg.cc/3J0vbZJF/m1.jpg' ,
            "rating": 2.5,
            "comment": "Disappointed with the alternative product. It lacks many features compared to the original.",
            "datePosted": "2024-05-12"
        },
        {
            "id": 7,
            "productId": 1,
            "img" : 'https://i.postimg.cc/3J0vbZJF/m4.jpg' ,
            "userName": "Emily Jones",
            "rating": 4.8,
            "comment": "I'm impressed with the quality of this alternative product. It's a great value for the price.",
            "datePosted": "2024-05-10"
        }
    ]

    return (
        <div className=' h-[60vh] mb-16 bg-cover bg-no-repeat ' style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 1)) , url(${img})` }} >
         <div className=' mx-3 md:mx-8 flex flex-col '>
        
            <div className='text-center my-3 '>
                <h1 className='text-2xl font-bold text-orange-200 poppin'>What Users Say</h1>
            </div>
           <div className=''>
           <Swiper
                spaceBetween={30}
                slidesPerView={1}
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
               
                breakpoints={{
                    640: {
                        slidesPerView: 1,
                    },
                    768: {
                        slidesPerView: 3,
                    },
                }}
                modules={[Autoplay]}
                className="mySwiper rounded-2xl lg:w-1/2"

            >
                {data.map((d, index) => (
                    <SwiperSlide key={index} className="">
                        <div className="bg-white rounded-lg px-4 py-8 shadow-md">
                            <div className="flex items-center">
                                <img src={d.img} alt={d.userName} className="w-12 h-12 rounded-full" />
                                <h3 className="ml-3 text-lg font-semibold">{d.userName}</h3>
                            </div>
                            <p className="mt-2 text-gray-700">{d.comment}</p>
                            <div className="mt-4 flex items-center">
                                {d.datePosted}
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
           </div>
           </div>
        </div>
    );
};

export default UserReview;