import React from 'react'
import { ThemaDetail } from '../model/Type'

interface OrbitProps {
  info:ThemaDetail
}

const Orbit:React.FC<OrbitProps> = ({info}) => {
  return (
    <div className='container-lg themaList'>
      <div className='bannerbox'>
        <img src={info.banner} alt="banner" />
      </div>
      <div className='detailbox d-flex flex-wrap justify-content-between align-items-start pt-1'>
        {
          info.detail.map((v, i) => {
            const price2 = v.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
            const discoun2 = v.discount ? v.discount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") : '';
            return (
              <div key={i} className='detaillist col-md-2 col-4'>
                <div className='paddingBox'>
                  <div className='detailimg'>
                    <img src={v.src} alt="orbit" />
                  </div>
                  <div className='detailtxt'>
                    <p className='product'>{v.title}</p>
                    <div className='price'>
                      <p>{price2}</p>
                      <span>{discoun2}</span>
                    </div>
                  </div>
                </div>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default Orbit
