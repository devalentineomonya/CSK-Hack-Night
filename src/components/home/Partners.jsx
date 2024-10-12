// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";

// Import required modules
import { Autoplay } from "swiper/modules";
import { Link } from "react-router-dom";

const Partners = () => {
  return (
    <section className="flex items-center justify-center">
      <div className="max-w-[1400px] w-full">
        <Swiper
          modules={[Autoplay]}
          spaceBetween={50}
          slidesPerView={4}
          autoplay={{ delay: 1500, disableOnInteraction: false }}
          loop={true}
          breakpoints={{
            320: { slidesPerView: 1 },
            640: { slidesPerView: 2 },
            768: { slidesPerView: 3 },
            1024: { slidesPerView: 4 },
          }}
        >
          <SwiperSlide>
            <Link target="_blank" rel="noopener" to="https://briankaranja.cybereyesnetworks.co.ke/">
              <img
                src="https://ctf.cybereyesnetworks.co.ke/images/logo%20new.jpg"
                className="object-cover w-full h-52"
                alt="Partner 1"
              />
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link target="_blank" rel="noopener" to="https://computersocietyofkirinya.tech">
            
            <img
              src="https://computersocietyofkirinyaga.tech/assets/logo-DROmQ3cj.jpg"
              className="object-cover w-full h-52"
              alt="Partner 2"
            />
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link target="_blank" rel="noopener" to="kyu.ac.ke">
            <img
              src="https://kyu.ac.ke/images/kyu_logo2.png#joomlaImage://local-images/kyu_logo2.png"
              className="object-cover w-full h-52"
              alt="Partner 3"
            />
            
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link target="_blank" rel="noopener" to="mvp.microsoft.com">
            
            <img
              src="https://th.bing.com/th/id/OIP.W_rgE-VbRtexUlNAwv0EEAHaGd?rs=1&pid=ImgDetMain"
              className="object-cover w-full h-52"
              alt="Partner 4"
            />
            </Link>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default Partners;
