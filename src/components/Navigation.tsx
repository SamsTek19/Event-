import { Shield, Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-900/95 backdrop-blur-sm border-b border-cyan-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-2">
            <Shield className="w-8 h-8 text-cyan-400" />
            <span className="text-xl font-bold text-white">Cyb1</span>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <button onClick={() => scrollToSection('home')} className="text-gray-300 hover:text-cyan-400 transition">Home</button>
            <button onClick={() => scrollToSection('about')} className="text-gray-300 hover:text-cyan-400 transition">About</button>
            <button onClick={() => scrollToSection('details')} className="text-gray-300 hover:text-cyan-400 transition">Event Details</button>
            <button onClick={() => scrollToSection('team')} className="text-gray-300 hover:text-cyan-400 transition">Team</button>
            <button onClick={() => scrollToSection('schedule')} className="text-gray-300 hover:text-cyan-400 transition">Schedule</button>
            <button onClick={() => scrollToSection('register')} className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-6 py-2 rounded-lg hover:from-cyan-600 hover:to-blue-600 transition">Register Now</button>
          </div>

          <button className="md:hidden text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden py-4 space-y-2">
            <button onClick={() => scrollToSection('home')} className="block w-full text-left text-gray-300 hover:text-cyan-400 py-2">Home</button>
            <button onClick={() => scrollToSection('about')} className="block w-full text-left text-gray-300 hover:text-cyan-400 py-2">About</button>
            <button onClick={() => scrollToSection('details')} className="block w-full text-left text-gray-300 hover:text-cyan-400 py-2">Event Details</button>
            <button onClick={() => scrollToSection('team')} className="block w-full text-left text-gray-300 hover:text-cyan-400 py-2">Team</button>
            <button onClick={() => scrollToSection('schedule')} className="block w-full text-left text-gray-300 hover:text-cyan-400 py-2">Schedule</button>
            <button onClick={() => scrollToSection('register')} className="block w-full text-left bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-6 py-2 rounded-lg mt-2">Register Now</button>
          </div>
        )}
      </div>
    </nav>
  );
}
