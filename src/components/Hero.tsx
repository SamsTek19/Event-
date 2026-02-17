import { Calendar, MapPin, Shield } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function Hero() {
  const navigate = useNavigate();

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 pt-16">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzFmMmQzZCIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-20"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <div className="flex justify-center mb-6">
          <Shield className="w-24 h-24 text-cyan-400 animate-pulse" />
        </div>

        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
          <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Cyb1</span>
        </h1>

        <h2 className="text-2xl md:text-4xl font-semibold text-gray-200 mb-4">
          Gamified Educational Event on Safe Internet Practices & Digital Hygiene
        </h2>

        <p className="text-xl md:text-2xl text-cyan-400 mb-8 font-medium">
          Learn. Play. Protect.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-12 text-gray-300">
          <div className="flex items-center gap-2">
            <Calendar className="w-5 h-5 text-cyan-400" />
            <span>Coming Soon</span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="w-5 h-5 text-cyan-400" />
            <span>Virtual & In-Person</span>
          </div>
        </div>

        <button
          onClick={() => navigate('/register')}
          className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-10 py-4 rounded-lg text-lg font-semibold hover:from-cyan-600 hover:to-blue-600 transform hover:scale-105 transition shadow-lg shadow-cyan-500/50"
        >
          Register Now
        </button>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20">
          <div className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-lg border border-cyan-500/20">
            <h3 className="text-cyan-400 text-3xl font-bold mb-2">Interactive</h3>
            <p className="text-gray-300">Gamified challenges</p>
          </div>
          <div className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-lg border border-cyan-500/20">
            <h3 className="text-cyan-400 text-3xl font-bold mb-2">Hands-On</h3>
            <p className="text-gray-300">Cybersecurity learning</p>
          </div>
          <div className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-lg border border-cyan-500/20">
            <h3 className="text-cyan-400 text-3xl font-bold mb-2">Team-Based</h3>
            <p className="text-gray-300">Competitions</p>
          </div>
        </div>
      </div>
    </section>
  );
}
