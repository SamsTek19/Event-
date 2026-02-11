import { Zap, Users, Shield, TrendingUp } from 'lucide-react';

export default function WhyAttend() {
  return (
    <section className="py-20 bg-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Why Attend?
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="bg-slate-900 p-8 rounded-lg border border-cyan-500/20">
            <Zap className="w-12 h-12 text-yellow-400 mb-4" />
            <h3 className="text-2xl font-bold text-white mb-4">Engaging & Interactive</h3>
            <p className="text-gray-300 leading-relaxed">
              Traditional lectures are passive and forgettable. Our gamified approach keeps you engaged, active, and excited to learn through hands-on challenges and real-world scenarios.
            </p>
          </div>

          <div className="bg-slate-900 p-8 rounded-lg border border-cyan-500/20">
            <Users className="w-12 h-12 text-green-400 mb-4" />
            <h3 className="text-2xl font-bold text-white mb-4">Learn by Doing</h3>
            <p className="text-gray-300 leading-relaxed">
              Don't just listen to theory. Experience cybersecurity challenges firsthand in a safe environment where making mistakes is part of the learning process.
            </p>
          </div>

          <div className="bg-slate-900 p-8 rounded-lg border border-cyan-500/20">
            <Shield className="w-12 h-12 text-cyan-400 mb-4" />
            <h3 className="text-2xl font-bold text-white mb-4">Build Lasting Habits</h3>
            <p className="text-gray-300 leading-relaxed">
              Walk away with practical skills and security habits that you'll use every day. Our approach focuses on making digital hygiene second nature, not just a checklist.
            </p>
          </div>

          <div className="bg-slate-900 p-8 rounded-lg border border-cyan-500/20">
            <TrendingUp className="w-12 h-12 text-blue-400 mb-4" />
            <h3 className="text-2xl font-bold text-white mb-4">Digital Responsibility</h3>
            <p className="text-gray-300 leading-relaxed">
              Become a more responsible digital citizen. Learn to protect not just yourself, but also your family, colleagues, and community from cyber threats.
            </p>
          </div>
        </div>

        <div className="bg-gradient-to-r from-cyan-500/20 to-blue-500/20 p-8 rounded-lg border border-cyan-500/30">
          <h3 className="text-2xl font-bold text-white mb-4 text-center">Perfect For</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div>
              <p className="text-lg text-cyan-400 font-semibold mb-2">Students</p>
              <p className="text-gray-300">Build essential digital skills for academic and personal life</p>
            </div>
            <div>
              <p className="text-lg text-cyan-400 font-semibold mb-2">Professionals</p>
              <p className="text-gray-300">Enhance workplace security awareness and best practices</p>
            </div>
            <div>
              <p className="text-lg text-cyan-400 font-semibold mb-2">Everyone</p>
              <p className="text-gray-300">Anyone who uses the internet and wants to stay safe online</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
