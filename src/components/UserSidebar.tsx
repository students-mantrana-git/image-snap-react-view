
import { Link, useLocation } from 'react-router-dom';

const UserSidebar = () => {
  const location = useLocation();

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <div className="w-full p-6">
      <div className="flex flex-col items-center mb-6">
        <div className="w-24 h-24 bg-gray-300 rounded-full mb-4 flex items-center justify-center">
          <svg className="w-12 h-12 text-gray-500" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd"></path>
          </svg>
        </div>
      </div>
      
      <div className="space-y-2">
        <Link to="/profile">
          <button 
            className={`w-full py-3 text-center rounded-md transition-colors ${
              isActive('/profile') 
                ? 'bg-mantrana-purple text-white' 
                : 'border border-mantrana-purple text-mantrana-purple hover:bg-mantrana-purple hover:text-white'
            }`}
          >
            My Profile
          </button>
        </Link>
        <Link to="/subscriptions">
          <button 
            className={`w-full py-3 text-center rounded-md transition-colors ${
              isActive('/subscriptions') 
                ? 'bg-mantrana-purple text-white' 
                : 'border border-mantrana-purple text-mantrana-purple hover:bg-mantrana-purple hover:text-white'
            }`}
          >
            My Subscriptions
          </button>
        </Link>
        <Link to="/orders">
          <button 
            className={`w-full py-3 text-center rounded-md transition-colors ${
              isActive('/orders') 
                ? 'bg-mantrana-purple text-white' 
                : 'border border-mantrana-purple text-mantrana-purple hover:bg-mantrana-purple hover:text-white'
            }`}
          >
            Order
          </button>
        </Link>
      </div>
    </div>
  );
};

export default UserSidebar;
