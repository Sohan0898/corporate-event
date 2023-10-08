import { animateScroll } from 'react-scroll';
import { AiOutlineToTop } from 'react-icons/ai';

const Scroll = () => {
    const scrollToTop = () => {
        const options = {
          duration: 500,
          delay: 100,
          smooth: true,
        };
        animateScroll.scrollToTop(options);
      };
    
      return (
        <div className="flex justify-end relative">
            
            <button><kbd onClick={scrollToTop} className=" kbd kbd-md absolute font-bold bottom-10 right-4 shadow-md bg-amber-500 rounded-full text-white text-xl"><AiOutlineToTop /></kbd></button>
        </div>
      );
    };

export default Scroll;