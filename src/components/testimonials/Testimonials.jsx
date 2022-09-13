import React from "react";
import "./testimonials.css";
import avT01 from "../../assets/photo-1438761681033-6461ffad8d80.jfif";
import avT02 from "../../assets/download.jfif";

// import {Pagination} from 'swiper';
// import {Swiper,SwiperSlide} from 'swiper/react'

// import 'swiper/css'
// import 'swiper/css/navigation'
// import 'swiper/css/pagination'
import 'swiper/css/scrollbar'


const data = [
  {
    avatar: avT01,
    name: "Some Name",
    review:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magni sitiure eius distinctio modi quidemnecessitatibus officiis laborum!",
  },
  {
    avatar: avT02,
    name: "Some Name 2",
    review:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magni sit",
  },
  {
    avatar: avT02,
    name: "Some Name 2",
    review:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magni sit",
  },
  {
    avatar: avT02,
    name: "Some Name 2",
    review:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magni sit",
  }
];

const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Reviews from Clients</h5>
      <h2>Testimonials</h2>

      {/* <Swiper className="container testimonials__container">
        modules={[Pagination]}
        spaceBetween={40}
        slidePerView={1}
        pagination={{clickable:true}}
        {data.map(({avatar,name,review},index) => {
          return (
            <SwiperSlider key={index} className="testimonial">
              <div className="client__avatar">
                <img src={avatar} alt="Avatar One" />
              </div>
              <h5 className="client__name">{name}</h5>
              <small className="client__review">{review}</small>
            </SwiperSlider> 
          );
        })}
      </Swiper>*/}
    </section>
  );
};

export default Testimonials;
