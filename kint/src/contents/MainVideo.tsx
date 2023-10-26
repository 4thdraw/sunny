import React from 'react'
import { ConMainVideo } from '../model/Type';

interface VideoProps{
    info:ConMainVideo;
}

const MainVideo:React.FC<VideoProps> = ({info}) => {
    

    return (
        <section id='video'>
            <div className='introvideo'>
                <div className='videobox'>
                    <video muted autoPlay loop className='pc_video'>
                        <source src={info.pc} type="video/mp4" />
                    </video>
                    <video muted autoPlay loop className='mo_video'>
                        <source src={info.mo} type="video/mp4" />
                    </video>
                </div>
            </div>
        </section>
    )
}

export default MainVideo
