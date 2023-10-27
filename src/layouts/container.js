import Navbar from './navbar';
import Footer from './footer';
function Container({children}) {
    return (
        <div className="w-full min-h-screen relative font-sans overflow-hidden">
            <Navbar/>
            <main className='flex-grow'>
            {children}
            </main>
            <Footer/>
        </div>
    );
}

export default Container;