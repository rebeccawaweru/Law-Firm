import { useEffect } from 'react';
import { Container} from '../layouts';
import { Video } from '../components';
import { Intro, About,Goals, CustomSlider } from './content';
import 'aos/dist/aos.css';
function Home() {
  useEffect(()=>{
    window.scrollTo(0, 0);
  },[]);
    return (
    <Container>
      <Video/>
      <div className='flex flex-col  items-center justify-center text-center'>
      <Intro/>
      <div className='home -mt-24'>
      <div className='about'>
      <About/>
      <Goals/>
      </div>
      <CustomSlider/>
      </div>
      </div>
    </Container>
    );
}

export default Home;