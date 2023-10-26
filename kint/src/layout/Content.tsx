import React from 'react'
import { Con } from '../model/Type'

import Mainslide from '../contents/Mainslide'
import MainVideo from '../contents/MainVideo'
import New from '../contents/New'
import Best from '../contents/Best'
import Thema from '../contents/Thema'
import Event from '../contents/Event'
import Review from '../contents/Review'
import Contact from '../contents/Contact'

interface ContentProps{
  info:Con
}

const Content:React.FC<ContentProps>= ({info}) => {
  return (
    <main>
      {/* <Mainslide info={info.mainslide}></Mainslide> */}
      <MainVideo info={info.mainvideo}></MainVideo>
      <New info={info.new}></New>
      <Best info={info.best}></Best>
      <Thema info={info.thema}></Thema>
      <Event info={info.event}></Event>
      <Review info={info.review}></Review>
      <Contact></Contact>
    </main>
  )
}

export default Content