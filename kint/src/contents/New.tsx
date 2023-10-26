import React, { useRef, useState } from 'react';
import { Detail } from '../model/Type'

interface ConNewProps {
    info: Detail[]
}

const New: React.FC<ConNewProps> = ({info}) => {
    return (
        <section id="new">
            <div className='title'>
                <h3>New Collection</h3>
                <p>다양한 스타일의 컬렉션과 실패없는 선물 패키지,<br />
                    매주 3가지씩 업로드 되는 신상품을 만나보세요</p>
                <a href="#none" className='more'>more view</a>
            </div>
            <div className='newList container'>
                <ul className='d-flex flex-wrap'>
                    {
                        info.map((v, i) => {
                            const price = v.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
                            return(
                                <li key={i} className='col-md-3 col-6'>
                                    <div className='newBox p-2'>
                                        <a className='imgBox' href="">
                                            <span className='cate'>{v.category}</span>
                                            <img className='w-100' src={v.src} alt="" />
                                            <img className='hov w-100' src={v.thumb} alt="" />
                                        </a>
                                        <div className='txtBox'>
                                            <h2>
                                                <a href="">{v.title}</a>
                                            </h2>
                                            <span>{price}</span>
                                        </div>
                                    </div>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        </section>
    )
}

export default New
