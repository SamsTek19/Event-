import { Trophy, Users, Target, Lightbulb } from 'lucide-react';

export default function Methodology() {
  return (
    <section className="py-20 bg-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Our Methodology
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto mb-6"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            The Gamified Cybersecurity Challenge Model
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          <div className="bg-slate-900 p-6 rounded-lg border border-cyan-500/20 text-center">
            <div className="flex justify-center mb-4">
              <Users className="w-12 h-12 text-cyan-400" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">Team Rotation</h3>
            <p className="text-gray-400">Teams rotate through different challenge stations</p>
          </div>

          <div className="bg-slate-900 p-6 rounded-lg border border-cyan-500/20 text-center">
            <div className="flex justify-center mb-4">
              <Target className="w-12 h-12 text-green-400" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">Real Scenarios</h3>
            <p className="text-gray-400">Face real-life cybersecurity situations and make decisions</p>
          </div>

          <div className="bg-slate-900 p-6 rounded-lg border border-cyan-500/20 text-center">
            <div className="flex justify-center mb-4">
              <Trophy className="w-12 h-12 text-yellow-400" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">Point System</h3>
            <p className="text-gray-400">Earn points for correct choices and security decisions</p>
          </div>

          <div className="bg-slate-900 p-6 rounded-lg border border-cyan-500/20 text-center">
            <div className="flex justify-center mb-4">
              <Lightbulb className="w-12 h-12 text-blue-400" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">Learn & Compete</h3>
            <p className="text-gray-400">Healthy competition combined with collaborative learning</p>
          </div>
        </div>

        <div className="bg-gradient-to-r from-slate-900 to-blue-900/50 p-8 rounded-lg border border-cyan-500/20">
          <h3 className="text-2xl font-bold text-white mb-6">Why Gamification?</h3>
          <div className="space-y-4 text-gray-300">
            <p className="leading-relaxed">
              Traditional cybersecurity training often relies on passive lectures and theoretical knowledge, which can be dry and forgettable. Our gamified approach transforms learning into an active, engaging experience where participants learn by doing.
            </p>
            <p className="leading-relaxed">
              By simulating real-world scenarios in a safe environment, participants can make mistakes, learn from them, and develop muscle memory for secure decision-making. The competitive element adds excitement and motivation, while team collaboration ensures knowledge sharing and diverse perspectives.
            </p>
            <p className="leading-relaxed">
              This hands-on methodology ensures that the lessons learned are not just understood intellectually but are internalized and can be applied immediately in daily digital activities.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
