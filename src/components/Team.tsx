import { Lock, Share2, Globe, Mail, Cloud, CreditCard, Server, Smartphone, Eye, HardDrive, Crown } from 'lucide-react';

export default function Team() {
  const team = [
    {
      name: 'Gbadago Ishmael',
      role: 'Group Leader',
      challenge: 'Cloud & Data Security',
      description: 'Public or Private Data?',
      icon: Cloud,
      isLeader: true,
    },
    {
      name: 'Samuel Sarfo Agyei',
      role: 'Facilitator',
      challenge: 'Password Management',
      description: 'Build or Break the Password',
      icon: Lock,
    },
    {
      name: 'Zipporah Donkor',
      role: 'Facilitator',
      challenge: 'Safe Social Media',
      description: 'Overshare or Secure?',
      icon: Share2,
    },
    {
      name: 'Adu Paul',
      role: 'Facilitator',
      challenge: 'Safe Browsing',
      description: 'Click or Skip?',
      icon: Globe,
    },
    {
      name: 'Ebenezer Quarshie',
      role: 'Facilitator',
      challenge: 'Email Security',
      description: 'Phish or Legit?',
      icon: Mail,
    },
    {
      name: 'Nlenkiba Carlos Nkoten',
      role: 'Facilitator',
      challenge: 'Online Financial Safety',
      description: 'Scam or Safe Transaction?',
      icon: CreditCard,
    },
    {
      name: 'Joshua Okyere',
      role: 'Facilitator',
      challenge: 'Device & Software Security',
      description: 'Secure the Device',
      icon: Server,
    },
    {
      name: 'Michael Nugbley Esoun',
      role: 'Facilitator',
      challenge: 'Mobile Security',
      description: 'App Permission Trap',
      icon: Smartphone,
    },
    {
      name: 'Patrick Azise-Ere',
      role: 'Facilitator',
      challenge: 'Identity & Privacy Protection',
      description: 'How Exposed Are You?',
      icon: Eye,
    },
    {
      name: 'Rouamba Daniel',
      role: 'Facilitator',
      challenge: 'Backup & Data Recovery',
      description: 'Infected or Clean',
      icon: HardDrive,
    },
  ];

  return (
    <section id="team" className="py-20 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Meet Our Team
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto mb-6"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Expert facilitators guiding you through each cybersecurity challenge
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {team.map((member, index) => {
            const Icon = member.icon;
            return (
              <div
                key={index}
                className={`bg-slate-800 p-6 rounded-lg border transition hover:transform hover:scale-105 ${
                  member.isLeader
                    ? 'border-yellow-400/50 ring-2 ring-yellow-400/20'
                    : 'border-cyan-500/20 hover:border-cyan-500/50'
                }`}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="bg-slate-700 p-3 rounded-lg">
                    <Icon className="w-8 h-8 text-cyan-400" />
                  </div>
                  {member.isLeader && (
                    <Crown className="w-6 h-6 text-yellow-400" />
                  )}
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{member.name}</h3>
                <p className={`text-sm mb-3 ${member.isLeader ? 'text-yellow-400' : 'text-cyan-400'}`}>
                  {member.role}
                </p>
                <div className="border-t border-slate-700 pt-4">
                  <p className="text-white font-semibold mb-1">{member.challenge}</p>
                  <p className="text-gray-400 text-sm">{member.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
