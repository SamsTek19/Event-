import { Clock, Coffee, Trophy, Users } from 'lucide-react';

export default function Schedule() {
  const scheduleItems = [
    {
      time: '9:00 AM - 9:30 AM',
      title: 'Registration & Welcome',
      description: 'Check-in, receive materials, and meet fellow participants',
      icon: Users,
    },
    {
      time: '9:30 AM - 10:00 AM',
      title: 'Opening Session',
      description: 'Event introduction, rules, and team formation',
      icon: Users,
    },
    {
      time: '10:00 AM - 12:30 PM',
      title: 'Challenge Stations - Round 1',
      description: 'Teams rotate through first set of cybersecurity challenges',
      icon: Trophy,
    },
    {
      time: '12:30 PM - 1:30 PM',
      title: 'Lunch Break & Networking',
      description: 'Enjoy lunch and connect with other participants',
      icon: Coffee,
    },
    {
      time: '1:30 PM - 4:00 PM',
      title: 'Challenge Stations - Round 2',
      description: 'Continue rotating through remaining challenge stations',
      icon: Trophy,
    },
    {
      time: '4:00 PM - 4:30 PM',
      title: 'Final Quiz & Reflection',
      description: 'Test your knowledge and reflect on what you learned',
      icon: Clock,
    },
    {
      time: '4:30 PM - 5:00 PM',
      title: 'Closing Ceremony & Awards',
      description: 'Celebrate achievements and award top teams',
      icon: Trophy,
    },
  ];

  return (
    <section id="schedule" className="py-20 bg-slate-900">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Event Schedule
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto mb-6"></div>
          <p className="text-xl text-gray-300">
            A full day of interactive learning and challenges
          </p>
        </div>

        <div className="space-y-6">
          {scheduleItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="bg-slate-800 p-6 rounded-lg border border-cyan-500/20 hover:border-cyan-500/50 transition flex items-start gap-6"
              >
                <div className="bg-cyan-500/10 p-4 rounded-lg flex-shrink-0">
                  <Icon className="w-8 h-8 text-cyan-400" />
                </div>
                <div className="flex-1">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                    <h3 className="text-xl font-bold text-white">{item.title}</h3>
                    <span className="text-cyan-400 font-semibold text-sm md:text-base mt-1 md:mt-0">
                      {item.time}
                    </span>
                  </div>
                  <p className="text-gray-400">{item.description}</p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-12 bg-gradient-to-r from-slate-800 to-blue-900/50 p-6 rounded-lg border border-cyan-500/20 text-center">
          <p className="text-gray-300 text-lg">
            <span className="text-cyan-400 font-semibold">Note:</span> Schedule is subject to change. All participants will be notified of any updates via email.
          </p>
        </div>
      </div>
    </section>
  );
}
