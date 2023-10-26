import React, { useRef, useState } from 'react'
import { ConEvent } from '../model/Type'

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Pagination, Navigation } from 'swiper/modules';

interface EventProps {
    info : ConEvent[];
}

const Event:React.FC<EventProps> = ({info}) => {
    return (
        <section id="event">
            <div className='title'>
                <h3>Event</h3>
                <p>놓칠 수 없는 혜택</p>
            </div>
            <Swiper
                pagination={{
                    dynamicBullets: true,
                }}
                navigation={true}
                loop={true}
                modules={[Pagination, Navigation]}
                className="mySwiper"
            >
                {
                    info.map((v, i) => {
                        return(
                            <SwiperSlide>
                                <div className='slidebox d-flex justify-content-center align-items-center'>
                                    <div className='imgbox order-md-2'>
                                        <img src={v.src} alt="eventimg" />
                                    </div>
                                    <div className='txtbox order-md-1'>
                                        <div className='subtitle'>
                                            {
                                            v.subtitle.split("<strong>").map((vv, idx) => {
                                                if (idx % 2 === 0) {
                                                    return vv
                                                } else {
                                                    return <strong key={idx}>{vv}</strong>
                                                }
                                            })
                                            }
                                        </div>
                                        <div className='realtitle'>
                                            {v.title.split("<br>").map((br, i) => {
                                                const strongSplit = br.split("<strong>");
                                                return (
                                                    <p key={i} className={"explain" + i}>
                                                        {strongSplit.map((v, idx) => {
                                                            if (idx % 2 === 0) {
                                                                return v; // 짝수 인덱스는 <strong> 태그 외의 텍스트
                                                            } else {
                                                                return <strong key={idx}>{v}</strong>; // 홀수 인덱스는 <strong> 태그 내부의 텍스트
                                                            }
                                                        })}
                                                    </p>
                                                );
                                            })}
                                        </div>
                                        <div className='button'>
                                            <a href="#none">
                                                {v.button}
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        )
                    })
                }
            </Swiper>
        </section>
    )
}

export default Event