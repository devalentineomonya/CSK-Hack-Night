// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay"

import { Autoplay } from "swiper/modules";

const Partners = () => {
  return (
    <section className="flex items-center justify-center">
      <div className="max-w-[1400px] w-full">
        <Swiper
          modules={[Autoplay]}
          spaceBetween={50}
          slidesPerView={4}
          autoplay={{ delay: 300 }}
          loop
    
        >
          <SwiperSlide>
            <img
              src="https://briankaranja.cybereyesnetworks.co.ke/images/logo%20new.jpg"
              className="object-cover w-full h-52"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://computersocietyofkirinyaga.tech/assets/logo-DROmQ3cj.jpg"
              className="object-cover w-full h-52"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://kyu.ac.ke/images/kyu_logo2.png#joomlaImage://local-images/kyu_logo2.png"
              className="object-cover w-full h-52"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://th.bing.com/th/id/OIP.W_rgE-VbRtexUlNAwv0EEAHaGd?rs=1&pid=ImgDetMain"
              className="object-cover w-full h-52"
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default Partners;
