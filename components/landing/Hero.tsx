// components/HeroSection.tsx
import { Button } from '../ui/button';
import Link from 'next/link';
import { FaArrowRight } from 'react-icons/fa';

const HeroSection: React.FC = () => {
  return (
    <div className="relative bg-gray-900 min-h-screen flex items-center justify-center text-white overflow-hidden">
      {/* Subtle Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-900 via-gray-900 to-purple-900 opacity-70 animate-gradient"></div>

      {/* Animated Background Grid Lines */}
      <div className="absolute inset-0">
        <div className="grid grid-cols-12 gap-2 h-full opacity-20 animate-grid">
          {Array.from({ length: 12 }).map((_, index) => (
            <div key={index} className="border-r border-gray-700"></div>
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 md:px-12 text-center">
        <h1 className="text-4xl md:text-6xl font-bold leading-tight animate-fade-in">
          Simplify Your Business with <p className="text-yellow-400 py-4">invoicegen</p>
        </h1>
        <p className="mt-4 text-lg md:text-xl max-w-2xl mx-auto animate-fade-in-delay">
          More than just invoicing. Manage your entire business workflow with ease.
        </p>
        <div className="mt-8 flex justify-center animate-bounce-in">
          <Link href="/signup">
            <Button className="bg-yellow-400 hover:bg-yellow-300 text-gray-900 font-semibold py-3 px-6 rounded-full flex items-center space-x-2">
              <span>Get Started</span> <FaArrowRight />
            </Button>
          </Link>
        </div>
        <p className="mt-4 text-sm text-gray-200 animate-fade-in-delay">
          No credit card required. Start your free trial today!
        </p>
      </div>

      {/* Animated Decorative Corner Elements */}
      <div className="absolute bottom-0 left-0 w-32 h-32 bg-blue-700 opacity-30 transform rotate-45 animate-pulse"></div>
      <div className="absolute top-0 right-0 w-32 h-32 bg-purple-700 opacity-30 transform rotate-45 animate-pulse"></div>
    </div>
  );
};

export default HeroSection;
