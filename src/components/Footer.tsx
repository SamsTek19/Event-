import { Shield, Mail, Twitter, Linkedin, Github } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 border-t border-cyan-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <Shield className="w-8 h-8 text-cyan-400" />
              <span className="text-2xl font-bold text-white">Cyb1</span>
            </div>
            <p className="text-gray-400 mb-4 max-w-md">
              Empowering individuals with practical cybersecurity knowledge through gamified learning experiences. Learn. Play. Protect.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-gray-400 hover:text-cyan-400 transition">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-cyan-400 transition">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-cyan-400 transition">
                <Github className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-gray-400 hover:text-cyan-400 transition">
                  About
                </Link>
              </li>
              <li>
                <Link to="/team" className="text-gray-400 hover:text-cyan-400 transition">
                  Team
                </Link>
              </li>
              <li>
                <Link to="/" className="text-gray-400 hover:text-cyan-400 transition">
                  Schedule
                </Link>
              </li>
              <li>
                <Link to="/register" className="text-gray-400 hover:text-cyan-400 transition">
                  Register
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Contact</h4>
            <ul className="space-y-2">
              <li className="flex items-center gap-2 text-gray-400">
                <Mail className="w-4 h-4" />
                <a href="mailto:info@cyb1event.com" className="hover:text-cyan-400 transition">
                  info@cyb1event.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm">
            {currentYear} Cyb1 Event. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm">
            <button className="text-gray-400 hover:text-cyan-400 transition">
              Privacy Policy
            </button>
            <button className="text-gray-400 hover:text-cyan-400 transition">
              Terms of Service
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
