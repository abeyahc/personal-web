import '../index.css';
import sprite from '../assets/personal-sprite.png';

export default function Load() {
    return (
      <div className="flex justify-center items-center min-h-screen">
         <div className="sprite scale-450" style={{backgroundImage: `url(${sprite})`}} />
      </div>
     
    );
}