
import { Link } from 'react-router-dom';
import { ChevronDown, User } from 'lucide-react';
import Logo from './Logo';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  return (
    <nav className="w-full py-4 px-5 border-b">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center gap-8">
          <Logo />

          <div className="hidden lg:flex items-center space-x-6">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="flex items-center gap-1">
                  Predictors <ChevronDown size={16} />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem>JEE Main 2025</DropdownMenuItem>
                <DropdownMenuItem>NEET 2025</DropdownMenuItem>
                <DropdownMenuItem>MHT CET 2025</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <Link to="/iq-test" className="text-gray-800 hover:text-mantrana-purple">IQ test</Link>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="flex items-center gap-1">
                  Services <ChevronDown size={16} />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem>Counseling</DropdownMenuItem>
                <DropdownMenuItem>Test Series</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <Link to="/webinar" className="text-gray-800 hover:text-mantrana-purple">Webinar</Link>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="flex items-center gap-1">
                  Subscription <ChevronDown size={16} />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem>Basic</DropdownMenuItem>
                <DropdownMenuItem>Premium</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <Link to="/news" className="text-gray-800 hover:text-mantrana-purple">News</Link>
            <Link to="/blogs" className="text-gray-800 hover:text-mantrana-purple">Blogs</Link>
            <Link to="/about-us" className="text-gray-800 hover:text-mantrana-purple">About Us</Link>
            <Link to="/contact-us" className="text-gray-800 hover:text-mantrana-purple">Contact Us</Link>
          </div>
        </div>

        <div className="flex items-center">
          <Button 
            variant="ghost" 
            className="rounded-full w-10 h-10 p-0 flex items-center justify-center bg-mantrana-purple text-white"
          >
            <User size={20} />
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
