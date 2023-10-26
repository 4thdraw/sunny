import React from 'react'
import { Detail } from '../model/Type'

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/grid';
import { Grid, Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';

interface ConBestProps {
    info:Detail[]
}

const New: React.FC<ConBestProps> = ({ info }) => {

    return (
        <section id="best">
            <div className='title'>
                <h3>Best Collection</h3>
                <p>소중한 선물을 고민하고 있다면<br />
                    65,000리뷰가 입증하는 킨트의 BEST상품을 만나보세요.</p>
                <a href="#none" className='more'>more view</a>
            </div>
            
            <div className='container'>
                <Swiper
                    pagination={{
                        type: 'progressbar',
                    }}
                    mousewheel={true}
                    slidesPerView="auto"
                    spaceBetween={0}
                    keyboard={true}
                    grid={{
                        rows: 2,
                    }}
                    modules={[Grid, Navigation, Pagination, Mousewheel, Keyboard]}
                    className="mySwiper"
                >
                    {
                        info.map((v, i) => {
                            const price = v.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
                            return(
                                <SwiperSlide className={`${v.cls} p-2`}>
                                    <a href="#none" className='item'>
                                        <img src={v.src} alt="" />
                                        <div className='hoverBox'>
                                            <p className='cate'>{v.category}</p>
                                            <p className='tit'>{v.title}</p>
                                            <p className='pri'>{price}</p>
                                            <div className='iconBox'>
                                                <i className="bi bi-arrow-right"></i>
                                            </div>
                                        </div>
                                    </a>
                                </SwiperSlide>
                            )
                        })
                    }
                </Swiper>
            </div>
        </section>
    )
}

export default New
