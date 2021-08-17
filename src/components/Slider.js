import { Swiper, SwiperSlide } from 'swiper/react';

function Slider() {
    return (
        <div>
            <Swiper pagination={true}>
                <SwiperSlide>SLIDER</SwiperSlide>
                <SwiperSlide>SLIDER</SwiperSlide>
                <SwiperSlide>SLIDER</SwiperSlide>
            </Swiper>
        </div>
    );
}

export default Slider;