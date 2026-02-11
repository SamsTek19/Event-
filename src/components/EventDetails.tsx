import { Lock, Shield, Globe, Mail, Cloud, CreditCard, Smartphone, Server, Eye, HardDrive } from 'lucide-react';

export default function EventDetails() {
  const topics = [
    { icon: Lock, title: 'Password Management', description: 'Learn to create and manage strong passwords' },
    { icon: Shield, title: 'Safe Social Media', description: 'Protect your identity on social platforms' },
    { icon: Globe, title: 'Safe Browsing', description: 'Navigate the web securely and avoid threats' },
    { icon: Mail, title: 'Email Security', description: 'Identify phishing and secure your inbox' },
    { icon: Cloud, title: 'Cloud & Data Security', description: 'Protect your data in the cloud' },
    { icon: CreditCard, title: 'Online Financial Safety', description: 'Secure your online transactions' },
    { icon: Server, title: 'Device & Software Security', description: 'Keep your devices protected' },
    { icon: Smartphone, title: 'Mobile Security', description: 'Secure your mobile devices and apps' },
    { icon: Eye, title: 'Identity & Privacy', description: 'Protect your digital identity' },
    { icon: HardDrive, title: 'Backup & Recovery', description: 'Safeguard your important data' },
  ];

  return (
    <section id="details" className="py-20 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Event Details
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto mb-6"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Safe internet practices and digital hygiene are essential skills in today's digital world
          </p>
        </div>

        <div className="mb-16">
          <h3 className="text-3xl font-bold text-white mb-8 text-center">Topics Covered</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {topics.map((topic, index) => {
              const Icon = topic.icon;
              return (
                <div key={index} className="bg-slate-800 p-6 rounded-lg border border-cyan-500/20 hover:border-cyan-500/50 transition group">
                  <Icon className="w-10 h-10 text-cyan-400 mb-4 group-hover:scale-110 transition" />
                  <h4 className="text-xl font-semibold text-white mb-2">{topic.title}</h4>
                  <p className="text-gray-400">{topic.description}</p>
                </div>
              );
            })}
          </div>
        </div>

        <div className="bg-gradient-to-r from-blue-900/50 to-slate-800 p-8 rounded-lg border border-cyan-500/20">
          <h3 className="text-3xl font-bold text-white mb-6 text-center">What You'll Get</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-xl font-semibold text-cyan-400 mb-4">Hands-On Experience</h4>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start gap-2">
                  <span className="text-cyan-400 mt-1">•</span>
                  <span>Gamified challenge sessions with real-world scenarios</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-cyan-400 mt-1">•</span>
                  <span>Practical learning stations for each security topic</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-cyan-400 mt-1">•</span>
                  <span>Interactive team-based competitions</span>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-xl font-semibold text-cyan-400 mb-4">Takeaways</h4>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start gap-2">
                  <span className="text-cyan-400 mt-1">•</span>
                  <span>Improved awareness of digital threats and vulnerabilities</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-cyan-400 mt-1">•</span>
                  <span>Practical skills for everyday digital safety</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-cyan-400 mt-1">•</span>
                  <span>Certificate of completion and networking opportunities</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
