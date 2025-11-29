import '../index.css';
import sprite from '../assets/personal-sprite.png';

export default function Load() {
    return (
      <div className="flex justify-center items-center min-h-screen">
         <div 
           className="sprite scale-450 sm:scale-200 md:scale-300 lg:scale-[4] xl:scale-[4.5] 2xl:scale-[5]" 
           style={{backgroundImage: `url(${sprite})`}} 
         />
      </div>
    );
}