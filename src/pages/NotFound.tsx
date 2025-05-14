
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 py-12 bg-gray-50">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-mantrana-purple mb-4">404</h1>
        <h2 className="text-3xl font-semibold mb-6">Page Not Found</h2>
        <p className="text-gray-600 mb-8 max-w-md mx-auto">
          Sorry, the page you are looking for might have been removed or is temporarily unavailable.
        </p>
        <Link to="/">
          <Button className="bg-mantrana-purple hover:bg-mantrana-light-purple">
            Go Back To Homepage
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
