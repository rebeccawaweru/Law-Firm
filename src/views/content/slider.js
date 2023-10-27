import React, { Component } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Value } from '../../components';
import {FaHands,FaTrophy,VscLaw,MdOutlineHandshake,GiTeamIdea,VscGroupByRefType} from '../../assets/icons'

class CustomSlider extends Component {
  constructor(props) {
    super(props);

    this.state = {
      slideIndex: 0,
    };
  }

  componentDidMount() {
    // Start autoplay when the component mounts
    this.startAutoplay();
  }

  componentWillUnmount() {
    // Stop autoplay when the component unmounts to prevent memory leaks
    this.stopAutoplay();
  }

  startAutoplay() {
    // You can adjust the autoplay interval as needed (in milliseconds)
    this.autoplayInterval = setInterval(() => {
      // Calculate the next slide index
      const totalSlides = 2;
      this.setState((prevState) => ({
        slideIndex: (prevState.slideIndex + 1) % totalSlides, // Wrap around when reaching the last slide
      }));
    }, 6000); // Change slide every 3 seconds (adjust as needed)
  }

  stopAutoplay() {
    // Stop the autoplay interval when the component unmounts
    clearInterval(this.autoplayInterval);
  }

  render() {
    return (
        <div className='pb-8 bg-transparent flex flex-col space-y-8 saturate-100 cursor-pointer  items-center justify-center  text-center text-white '>
        <div className='my-4 tracking-wider hover:scale-110'>
        <h1>OUR VALUES</h1>
         <div className='border-b border border-yellow mt-2'>
         </div>
        </div>
      <Carousel
      infiniteLoop
      showThumbs={false}
      showStatus={false}
      showArrows={false}
      showIndicators={false}
      autoPlay
      interval={8000}
      transitionTime={3000} // Adjust the transition time as needed
      stopOnHover={false} // Allow autoplay to continue even when hovering
      >
    
        <div className='grid grid-cols-1 2xl:grid-cols-3 xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-3'>
             <Value 
             Icon={FaHands}
             title='Client-Centered Service'
             desc='Our primary focus is on our clients. We are committed to 
             understanding their unique needs, objectives, and challenges. Through open communication, 
             active listening, and collaboration, we provide personalized legal advice and representation 
             that is responsive to our clients individual circumstances.'
             />
             <Value 
             Icon={FaTrophy}
             title='Legal Excellence'
             desc=' We uphold the highest standards of legal excellence in every aspect of our 
             practice. Our skilled team combines deep legal knowledge, extensive experience, and 
             meticulous attention to detail to deliver comprehensive and innovative legal solutions.'
             />
               <Value 
             Icon={VscLaw}
             title='Ethics and Integrity'
             desc=' Integrity and ethics form the foundation of our practice. We conduct 
             ourselves with the utmost professionalism, honesty, and transparency in all interactions with 
             our clients, colleagues, and the legal community. We maintain strict confidentiality and 
             always act in our clients best interests, ensuring their trust and confidence in our 
             representation.'
             />
            </div>
  
    
        <div className='grid grid-cols-1 2xl:grid-cols-3 xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-3'>
             <Value 
             Icon={MdOutlineHandshake}
             title='Advocacy and Justice'
             desc='As legal advocates, we are dedicated to fighting for justice and 
             upholding the rule of law. We passionately advocate for our clients rights, interests, and wellbeing. Our mission is to achieve equitable and favorable resolutions through skillful 
             negotiation, alternative dispute resolution, or vigorous representation in litigation, always 
             striving for the best possible outcomes.'
             />
             <Value 
             Icon={GiTeamIdea}
             title='Community Engagement'
             desc='We actively engage with and contribute to our local communities. 
             We recognize the importance of giving back and making a positive impact beyond the legal 
             realm. Through pro bono work, charitable initiatives, and community involvement, we aim to 
             improve access to justice and promote social equality and well-being.
             '
             />
               <Value 
             Icon={VscGroupByRefType}
             title='Professional Collaboration'
             desc=' We foster a collaborative work environment that values 
             teamwork, mutual respect, and diversity. By promoting the exchange of ideas and knowledge, 
             we leverage the collective expertise of our team to provide comprehensive and 
             multidisciplinary legal services. We collaborate with our clients, consultants, and experts to 
             develop effective strategies and innovative solutions'
             />
            </div>
      </Carousel>
     </div>
    );
  }
}

export default CustomSlider;