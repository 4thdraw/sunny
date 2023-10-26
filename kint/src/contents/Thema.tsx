import React, { useState } from 'react'
import { ConThema } from '../model/Type'

import First from '../thema/Orbit'
import Second from '../thema/Moment'
import Third from '../thema/Love'
import Fourth from '../thema/Flower'


interface ConThemaProps{
    info : ConThema
}

interface ThemaComponents {
    [key:string] : JSX.Element;
}

const Thema:React.FC<ConThemaProps> = ({info}) => {
    const selectThema : ThemaComponents = {
        first : <First info={info.list.orbit}/>,
        second : <Second info={info.list.moment}/>,
        third : <Third info={info.list.love}/>,
        fourth : <Fourth info={info.list.flower}/>
    }
    const [thema, setThema] = useState('first');


    const handleClickButton = (e:any) => {
        const {name} = e.target;

        e.target.classList.add('on');
        document.querySelectorAll('.clickbutton button').forEach((button) => {
            if (button.hasAttribute('name') && button.getAttribute('name') !== name){
                button.classList.remove('on');
            }
        });

        setThema(name);
    }

    return (
        <section id='thema'>
            <div className='title'>
                <h3>Thema</h3>
                <p>테마별 컬렉션을 만나보세요.</p>
            </div>
            <div className='clickbutton d-flex flex-wrap'>
                {
                    info.themalist.map((v, i) => {
                        return(
                            <button onClick={handleClickButton} name={v.name} key={i} className={`${v.cls}`}>
                                {v.title}
                            </button>
                        )
                    })
                }
            </div>
            <div>
                {thema && <div>{selectThema[thema]}</div>}
            </div>
        </section>
    )
}

export default Thema
