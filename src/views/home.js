import React from 'react';
import { Container,Footer  } from '../layouts';
import { Video } from '../components';
import { Intro, About,Goals, CustomSlider } from './content';
function Home() {
    return (
    <Container>
     <Video/>
     <div className='min-h-screen w-full flex flex-col  items-center justify-center text-center'>
      <Intro/>
      <div className='home min-h-screen -mt-24'>
      <About/>
      <Goals/>
    <CustomSlider/>
      </div>
     </div>
    <Footer/>
    </Container>
    );
}

export default Home;