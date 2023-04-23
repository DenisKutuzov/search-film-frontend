import React from 'react'

import styles from '../../scss/pages/home.module.scss'

import {Swiper, SwiperSlide} from 'swiper/react'
import {Autoplay, Navigation} from 'swiper'
import Link from 'next/link'

const MainSlider: React.FC = () => {
    return (
        <Swiper className='main__slider'
                spaceBetween={20}
                autoplay={{
                    delay: 3500,
                    disableOnInteraction: false,
                }}
                modules={[Navigation, Autoplay]}
                initialSlide={0}
                slidesPerView={1.5}
                speed={800}
                navigation={true}
                loop={true}
                centeredSlides={true}>
            <SwiperSlide className='main__slide'>
                1
                <Link className={styles.slide} href='/actor'>1</Link>
            </SwiperSlide>
            <SwiperSlide className='main__slide'>
                2
                <Link className={styles.slide} href='/actor'></Link>
            </SwiperSlide>
            <SwiperSlide className='main__slide'>
                3
                <Link className={styles.slide} href='/actor'></Link>
            </SwiperSlide>
            <SwiperSlide className='main__slide'>
                4
                <Link className={styles.slide} href='/actor'></Link>
            </SwiperSlide>
            <SwiperSlide className='main__slide'>
                5
                <Link className={styles.slide} href='/actor'></Link>
            </SwiperSlide>
            <SwiperSlide className='main__slide'>
                6
                <Link className={styles.slide} href='/actor'></Link>
            </SwiperSlide>
            <SwiperSlide className='main__slide'>
                7
                <Link className={styles.slide} href='/actor'></Link>
            </SwiperSlide>
            <SwiperSlide className='main__slide'>
                8
                <Link className={styles.slide} href='/actor'></Link>
            </SwiperSlide>
        </Swiper>
    )
}

export default MainSlider