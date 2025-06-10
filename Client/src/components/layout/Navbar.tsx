import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { Menu, X } from 'lucide-react';
import { Button } from '../ui/button';
import ThemeToggle from '../ui/ThemeToggle';
import axios from 'axios';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'Programs', path: '/programs' },
  { name: 'Events', path: '/events' },
  { name: 'Updates', path: '/updates' },
  { name: 'Administrative', path: '/administrative' },
  { name: 'About', path: '/about' },
  { name: 'Contact', path: '/contact' },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const [showlogout, Setshowlogout] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/account/dashboard", {
          withCredentials: true,
        });
        if (response.data.loggedIn) {
          localStorage.setItem("username", response.data.user)
          localStorage.setItem("role", response.data.role)
          localStorage.setItem("email", response.data.user)
        }
      } catch (err) {
        console.error("Error checking auth:", err);
      }
    };
    checkAuth();
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled || isOpen ? 'backdrop-blur py-3' : 'py-5'
      )}
    >
      <div className="container mx-auto px-4 md:px-6 ">
        <div className="flex items-center justify-between">
          <Link
            to="/"
            className="hidden md:block text-xl font-display font-bold tracking-tight text-estg-blue"
          >
            ESTG<span className="text-estg-blue">.</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-1">
            <ul className="flex items-center space-x-1">
              {navLinks.map(link => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className={cn(
                      'px-3 py-2 rounded-md text-sm font-medium transition-colors',
                      link.path === location.pathname
                        ? 'text-estg-blue'
                        : 'text-foreground/80 hover:text-foreground hover:bg-estg-gray/10 dark:hover:bg-gray-800/30',
                      !(isScrolled || isOpen) && 'text-white',
                      location.pathname === '/' && !isScrolled ? 'text-white' : 'text-gray-dark dark:text-white'

                    )}
                  >
                    {link.name}
                  </Link>

                </li>
              ))}
            </ul>
            <div className="flex items-center ml-7 gap-2">
              <div className={cn(
                !isScrolled && "bg-white font-extrabold rounded-md"
              )}>
                <ThemeToggle />
              </div>
              <Link
                to='/admin'
                className={cn(
                  'px-3 py-2 rounded-md text-sm font-medium transition-colors bg-blue-500 text-white hover:bg-blue-600',
                )}
              >
                Admin Panel
              </Link>
            </div>
          </div>

          {/* Mobile Menu Toggle - Moved to right */}


          <div className="md:hidden flex items-center gap-2 ml-auto">
            <div className={cn(
              !isScrolled && "bg-white font-extrabold rounded-md"
            )}>
              <ThemeToggle />
            </div>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={cn(
                "p-2 rounded-md text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none",
                !isScrolled && "bg-white dark:bg-black font-extrabold"
              )}
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>

        </div>

        {/* Mobile Menu */}
        <div className={cn(
          'md:hidden overflow-hidden transition-all duration-300 ease-in-out max-h-0',
          isOpen && 'max-h-[400px] mt-4'
        )}>
          <ul className="flex flex-col space-y-2 pb-4">
            {navLinks.map(link => (
              <li key={link.name}>
                <Link
                  to={link.path}
                  className={cn(
                    'block px-3 py-2 rounded-md text-base font-medium transition-colors ',
                    link.path === location.pathname
                      ? 'text-estg-blue bg-estg-gray-light dark:bg-gray-800'
                      : 'text-foreground/80 hover:text-foreground hover:bg-estg-gray-light dark:hover:bg-gray-800'
                  )}
                >
                  {link.name}
                </Link>
              </li>
            ))}
            <Link to={'/admin'}
              className={cn(
                'block px-3 py-2 rounded-md text-base font-medium transition-colors bg-blue-500 text-white hover:bg-blue-600',
              )}>
              Admin Panel
            </Link>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
