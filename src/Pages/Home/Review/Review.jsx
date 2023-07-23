import { useEffect, useState } from "react";
import { Rating } from "@smastrom/react-rating";
import '@smastrom/react-rating/style.css';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
// import "swiper/css/navigation";

const Review = () => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch('/CardData.json')
            .then((res) => res.json())
            .then((data) => setReviews(data));
    }, []);

    useEffect(() => {
        // Function to start the automatic slide change
        const intervalId = setInterval(() => {
            const swiper = document.querySelector(".mySwiper");
            if (swiper && swiper.swiper) {
                swiper.swiper.slideNext();
            }
        }, 4000);


        return () => clearInterval(intervalId);
    }, []);

    return (
        <section className="my-20">
            <div className="container mx-auto">
                <div className='text-5xl font-bold font-serif text-indigo-600 '>
                    <h2 className="text-center my-10">See the Reviews</h2>
                </div>
                <Swiper navigation={true} className="mySwiper">
                    {
                        reviews.map(review => (
                            <SwiperSlide key={review.id}>
                                <div className="flex flex-col items-center">
                                    <h3 className="text-2xl text-orange-400 mb-4">{review.name}</h3>
                                    <Rating
                                        style={{ maxWidth: 180 }}
                                        value={review.rating}
                                        readOnly
                                    />
                                    <p className="pt-8 pb-3">{review.comment}</p>
                                    <h3 className="text-xl">{review.reviewerName}</h3>

                                </div>
                            </SwiperSlide>
                        ))
                    }
                </Swiper>
            </div>
        </section>
    );
};

export default Review;




