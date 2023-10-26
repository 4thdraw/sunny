import React, { useRef, useState } from 'react'
import { ConReview } from '../model/Type';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';

interface ReviewProps {
    info:ConReview[];
}

const Review:React.FC<ReviewProps> = ({info}) => {
    

    return (
        <section id='review'>
            <div className='title'>
                <h3>Customer Review</h3>
                <p>실제 후기로 만나보는 킨트</p>
            </div>
            <div className='container'>
                <Swiper
                navigation={true}
                spaceBetween={30}
                slidesPerView={1}
                slidesPerGroupSkip={1}
                modules={[Navigation]}
                breakpoints={{
                    769: {
                        slidesPerView: 2,
                        slidesPerGroup: 2,
                    },
                    991: {
                        slidesPerView: 3,
                        slidesPerGroup: 3,
                    }
                }}
                className="mySwiper"
                >
                    {
                        info.map((v, i) => {
                            return (
                                <SwiperSlide className=''>
                                    <div className='reviewlist'>
                                        <div className={`background ${v.backgroundcls}`}>
                                            <img src={v.src} alt="reviewimg" className='reviewimg' />
                                        </div>
                                        <div className='iconbox py-3'>
                                            <i className="bi bi-star-fill"></i>
                                            <i className="bi bi-star-fill"></i>
                                            <i className="bi bi-star-fill"></i>
                                            <i className="bi bi-star-fill"></i>
                                            <i className="bi bi-star-fill"></i>
                                        </div>
                                        <div className='re_txt'>
                                            <h2 className='pb-3'>{v.title}</h2>
                                            <p>{v.content}</p>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            )
                        })
                    }
                </Swiper>
            </div>
        </section>
    )
}

export default Review
