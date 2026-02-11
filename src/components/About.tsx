import { AlertTriangle, Target, CheckCircle } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-20 bg-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            About the Event
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="bg-slate-900 p-8 rounded-lg border border-cyan-500/20">
            <div className="flex justify-center mb-4">
              <AlertTriangle className="w-12 h-12 text-yellow-400" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4 text-center">The Problem</h3>
            <p className="text-gray-300 text-center leading-relaxed">
              While awareness exists, unsafe online behaviors persist. Many people know about cybersecurity but don't apply best practices in their daily digital lives.
            </p>
          </div>

          <div className="bg-slate-900 p-8 rounded-lg border border-cyan-500/20">
            <div className="flex justify-center mb-4">
              <Target className="w-12 h-12 text-cyan-400" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4 text-center">Our Mission</h3>
            <p className="text-gray-300 text-center leading-relaxed">
              Bridge the gap between knowledge and action through interactive, gamified learning experiences that make cybersecurity engaging and practical.
            </p>
          </div>

          <div className="bg-slate-900 p-8 rounded-lg border border-cyan-500/20">
            <div className="flex justify-center mb-4">
              <CheckCircle className="w-12 h-12 text-green-400" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4 text-center">The Solution</h3>
            <p className="text-gray-300 text-center leading-relaxed">
              Hands-on challenges and real-world scenarios that teach safe internet practices and digital hygiene through active participation and team collaboration.
            </p>
          </div>
        </div>

        <div className="bg-gradient-to-r from-slate-900 to-blue-900/50 p-8 rounded-lg border border-cyan-500/20">
          <h3 className="text-3xl font-bold text-white mb-6 text-center">Our Objectives</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex items-start gap-3">
              <CheckCircle className="w-6 h-6 text-cyan-400 flex-shrink-0 mt-1" />
              <p className="text-gray-300">Educate participants on common cybersecurity threats and vulnerabilities</p>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="w-6 h-6 text-cyan-400 flex-shrink-0 mt-1" />
              <p className="text-gray-300">Identify and address unsafe online behaviors through practical examples</p>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="w-6 h-6 text-cyan-400 flex-shrink-0 mt-1" />
              <p className="text-gray-300">Provide hands-on experience in making secure digital decisions</p>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="w-6 h-6 text-cyan-400 flex-shrink-0 mt-1" />
              <p className="text-gray-300">Encourage responsible and mindful use of digital platforms</p>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="w-6 h-6 text-cyan-400 flex-shrink-0 mt-1" />
              <p className="text-gray-300">Promote long-term habits of good digital hygiene and security</p>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="w-6 h-6 text-cyan-400 flex-shrink-0 mt-1" />
              <p className="text-gray-300">Build confidence in navigating the digital world safely</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
