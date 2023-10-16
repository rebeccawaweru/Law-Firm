import Navbar from './navbar';
import Footer from './footer';
function Container({children}) {
    return (
        <div className="w-full min-h-screen  relative font-sans ">
            <Navbar/>
            {children}
            <Footer/>
        </div>
    );
}

export default Container;