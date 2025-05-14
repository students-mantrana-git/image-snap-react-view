
import { Facebook, Instagram, Youtube, MessageSquare } from 'lucide-react';
import Logo from './Logo';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-[#4a0072] text-white">
      <div className="container mx-auto py-8 px-5">
        <div className="flex flex-col md:flex-row justify-between items-center mb-6">
          <div className="mb-4 md:mb-0">
            <div className="flex items-center gap-2">
              <div className="relative w-10 h-10">
                <div className="absolute bottom-0 w-10 h-10 bg-yellow-400 rounded-full"></div>
                <div className="absolute top-0 right-0 w-8 h-8 bg-white rounded-full flex items-center justify-center">
                  <div className="w-4 h-4 border-t-2 border-r-2 border-[#4a0072] transform rotate-45 translate-y-1"></div>
                </div>
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-lg leading-tight text-white">CAREER</span>
                <span className="font-bold text-lg leading-tight text-white">MANTRANA</span>
              </div>
            </div>
          </div>
          
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 mb-4 md:mb-0">
            <Link to="/predictors" className="text-white hover:text-mantrana-light-yellow">Predictors</Link>
            <Link to="/iq-test" className="text-white hover:text-mantrana-light-yellow">IQ test</Link>
            <Link to="/subscription" className="text-white hover:text-mantrana-light-yellow">Subscription</Link>
            <Link to="/events" className="text-white hover:text-mantrana-light-yellow">Events</Link>
            <Link to="/ask" className="text-white hover:text-mantrana-light-yellow">Ask a query</Link>
            <Link to="/news" className="text-white hover:text-mantrana-light-yellow">News</Link>
            <Link to="/blogs" className="text-white hover:text-mantrana-light-yellow">Blogs</Link>
            <Link to="/about-us" className="text-white hover:text-mantrana-light-yellow">About Us</Link>
            <Link to="/contact-us" className="text-white hover:text-mantrana-light-yellow">Contact Us</Link>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-2 text-center md:text-right">Social Media</h3>
            <div className="flex gap-4 justify-center md:justify-end">
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="hover:text-mantrana-light-yellow">
                <Youtube size={24} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-mantrana-light-yellow">
                <Instagram size={24} />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-mantrana-light-yellow">
                <Facebook size={24} />
              </a>
              <a href="https://whatsapp.com" target="_blank" rel="noopener noreferrer" className="hover:text-mantrana-light-yellow">
                <MessageSquare size={24} />
              </a>
            </div>
          </div>
        </div>
        
        <div className="text-center pt-4 border-t border-purple-700">
          <p>Copyright © Career Mantrana's</p>
          <div className="flex justify-center mt-1 gap-2 text-sm">
            <Link to="/privacy" className="hover:underline">Privacy Policy</Link>
            <span>|</span>
            <Link to="/terms" className="hover:underline">Terms & Conditions</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
