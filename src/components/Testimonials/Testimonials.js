import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import { Avatar } from "antd";
import { useRef, useState } from "react";
import Slider from "react-slick";

import { TESTIMONIALS } from "redux/constants/testimonialsConstants";

const Testimonials = () => {
  const sliderRef = useRef(null);
  const [prevHovered, setPrevHovered] = useState(false);
  const [nextHovered, setNextHovered] = useState(false);

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 4000,
    cssEase: "linear",
    arrows: false,
    responsive: [
      {
        breakpoint: 1440,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const handleNext = () => {
    sliderRef.current.slickNext();
  };

  const handlePrev = () => {
    sliderRef.current.slickPrev();
  };

  return (
    <div className="px-3 sm:px-20 lg:px-44 py-7 sm:py-16">
      <div className="flex flex-row items-center gap-6 mb-6">
        <span className="w-12 border-2 border-solid border-blue-600 h-0 rounded-full"></span>
        <span className="text-4xl font-semibold">Our Testimonials</span>
      </div>
      <div className="flex justify-end gap-x-6 me-5">
        <button
          onClick={handlePrev}
          onMouseEnter={() => setPrevHovered(true)}
          onMouseLeave={() => setPrevHovered(false)}
          className="bg-[#B4D4FF] rounded-full overflow-hidden flex items-center"
        >
          <LeftOutlined className="p-3" />
          <span className={`pe-3 ${prevHovered ? "block" : "hidden"}`}>
            PREV
          </span>
        </button>
        <button
          onClick={handleNext}
          onMouseEnter={() => setNextHovered(true)}
          onMouseLeave={() => setNextHovered(false)}
          className="bg-[#B4D4FF] rounded-full overflow-hidden flex items-center"
        >
          <span className={`ps-3 ${nextHovered ? "block" : "hidden"}`}>
            NEXT
          </span>
          <RightOutlined className="p-3" />
        </button>
      </div>
      <Slider ref={sliderRef} {...settings}>
        {TESTIMONIALS.map((item, i) => {
          return (
            <div className="p-3" key={i}>
              <div className="shadow-md px-5 py-6 bg-[#EEF5FF80] hover:shadow-sm rounded-md border border-[#EEF5FF]">
                <div className="flex gap-x-4">
                  <Avatar className="bg-white text-4xl text-orange-600 flex justify-center items-center p-6">
                    {item.name[0]}
                  </Avatar>
                  <div>
                    <p className="text-lg leading-7">{item.name}</p>
                    <p className="text-sm text-gray-600">{item.company}</p>
                  </div>
                </div>
                <p className="my-4 text-gray-500 text-sm">{item.testimonial}</p>
              </div>
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default Testimonials;
