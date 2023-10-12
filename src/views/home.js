import React from 'react';
import { Container } from '../layouts';
import { Video } from '../components';
import Intro from './content/intro';
function Home() {
    return (
    <Container>
     <Video/>
     <div className='h-3/4 2xl:h-screen xl:h-screen lg:h-screen md:h-screen  w-full flex flex-col absolute z-20 items-center justify-center text-center'>
      <Intro/>
     </div>

    </Container>
    );
}

export default Home;