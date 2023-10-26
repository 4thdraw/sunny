import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';

import Header from './layout/Header';
import Content from './layout/Content';
import Footer from './layout/Footer';
import info from './data/info.json'


const App:React.FC = () => {

  return(
    <div>
      <Header info={info.head}/>
      <Content info={info.content}/>
      <Footer/>  
    </div>
  )
}


export default App;
