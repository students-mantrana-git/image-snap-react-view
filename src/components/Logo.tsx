
import { Link } from 'react-router-dom';

const Logo = () => {
  return (
    <Link to="/" className="flex items-center gap-2">
      <div className="relative w-10 h-10">
        <div className="absolute bottom-0 w-10 h-10 bg-yellow-400 rounded-full"></div>
        <div className="absolute top-0 right-0 w-8 h-8 bg-mantrana-purple rounded-full flex items-center justify-center">
          <div className="w-4 h-4 border-t-2 border-r-2 border-white transform rotate-45 translate-y-1"></div>
        </div>
      </div>
      <div className="flex flex-col">
        <span className="font-bold text-lg leading-tight text-mantrana-purple">CAREER</span>
        <span className="font-bold text-lg leading-tight text-mantrana-purple">MANTRANA</span>
      </div>
    </Link>
  );
};

export default Logo;
