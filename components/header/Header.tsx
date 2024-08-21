'use client';
import { useState } from 'react';
import Link from 'next/link';
import { useSession, signOut } from 'next-auth/react';
import { FiMenu, FiX } from 'react-icons/fi';
import { DropdownMenu, DropdownMenuItem } from '../ui/dropdown-menu';
import { Button } from '../ui/button';

const Header: React.FC = () => {
  const session = null; // Replace with `const { data: session } = useSession();` if using next-auth
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleSignOut = async () => {
    await signOut();
  };

  return (
    <header className="bg-gray-900 text-white py-6 shadow-lg sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center px-4 md:px-8">
        {/* Logo */}
        <Link href="/" className="text-3xl font-extrabold tracking-wider text-yellow-400 hover:text-yellow-300 transition">
          Invoicegen
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-10">
          <Link href="/invoices" className="hover:text-yellow-300 transition">
            Invoices
          </Link>
          <Link href="/expenses" className="hover:text-yellow-300 transition">
            Expenses
          </Link>
          <Link href="/projects" className="hover:text-yellow-300 transition">
            Projects
          </Link>
          <Link href="/features" className="hover:text-yellow-300 transition">
            Features
          </Link>
        </nav>

        {/* User Session, CTA, and Mobile Menu Toggle */}
        <div className="flex items-center space-x-6">
          <Link href="/pricing">
            <Button className="hidden md:inline-block bg-yellow-400 hover:bg-yellow-300 text-gray-900 font-semibold py-2 px-6 rounded-full transition">
              Pricing
            </Button>
          </Link>
          
          {session ? (
            <DropdownMenu>
              <Button variant="secondary" className="flex items-center space-x-2 bg-yellow-400 hover:bg-yellow-300 text-gray-900 py-2 px-4 rounded-full transition">
                <span>{session}</span>
                <FiMenu className="text-xl" />
              </Button>
              <DropdownMenuItem onClick={handleSignOut}>Sign Out</DropdownMenuItem>
            </DropdownMenu>
          ) : (
            <Link href="/api/auth/signin">
              <Button variant="secondary" className="bg-yellow-400 hover:bg-yellow-300 text-gray-900 py-2 px-4 rounded-full transition">
                Sign In
              </Button>
            </Link>
          )}

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-3xl hover:text-yellow-300 transition"
            onClick={toggleMenu}
          >
            {isMenuOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-gray-800 py-6 space-y-6 px-6 transition transform duration-300 ease-in-out">
          <Link href="/invoices" className="block hover:text-yellow-300 transition">
            Invoices
          </Link>
          <Link href="/expenses" className="block hover:text-yellow-300 transition">
            Expenses
          </Link>
          <Link href="/projects" className="block hover:text-yellow-300 transition">
            Projects
          </Link>
          <Link href="/features" className="block hover:text-yellow-300 transition">
            Features
          </Link>
          <Link href="/pricing" className="block hover:text-yellow-300 transition">
            Pricing
          </Link>
          {session ? (
            <button
              className="block hover:text-yellow-300 transition"
              onClick={handleSignOut}
            >
              Sign Out
            </button>
          ) : (
            <Link href="/api/auth/signin" className="block hover:text-yellow-300 transition">
              Sign In
            </Link>
          )}
        </div>
      )}
    </header>
  );
};

export default Header;
