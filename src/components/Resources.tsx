import { BookOpen, CheckSquare, ExternalLink } from 'lucide-react';

export default function Resources() {
  const resources = [
    {
      title: 'National Cyber Security Centre',
      description: 'UK government advice and support for cybersecurity',
      url: 'https://www.ncsc.gov.uk/',
    },
    {
      title: 'Stay Safe Online',
      description: 'Cybersecurity awareness resources and tips',
      url: 'https://staysafeonline.org/',
    },
    {
      title: 'OWASP Foundation',
      description: 'Open source security community resources',
      url: 'https://owasp.org/',
    },
  ];

  const checklist = [
    'Use strong, unique passwords for each account',
    'Enable two-factor authentication wherever possible',
    'Keep software and devices updated',
    'Be cautious of suspicious emails and links',
    'Back up important data regularly',
    'Review privacy settings on social media',
    'Use secure Wi-Fi connections',
    'Monitor financial accounts for unusual activity',
  ];

  return (
    <section className="py-20 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Resources
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-slate-800 p-8 rounded-lg border border-cyan-500/20">
            <div className="flex items-center gap-3 mb-6">
              <CheckSquare className="w-8 h-8 text-cyan-400" />
              <h3 className="text-2xl font-bold text-white">Digital Hygiene Checklist</h3>
            </div>
            <div className="space-y-3">
              {checklist.map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded border-2 border-cyan-400 flex-shrink-0 mt-0.5"></div>
                  <p className="text-gray-300">{item}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-slate-800 p-8 rounded-lg border border-cyan-500/20">
            <div className="flex items-center gap-3 mb-6">
              <BookOpen className="w-8 h-8 text-cyan-400" />
              <h3 className="text-2xl font-bold text-white">Recommended Reading</h3>
            </div>
            <div className="space-y-4">
              {resources.map((resource, index) => (
                <a
                  key={index}
                  href={resource.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block p-4 bg-slate-900 rounded-lg border border-cyan-500/20 hover:border-cyan-500/50 transition group"
                >
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <h4 className="text-white font-semibold mb-1 group-hover:text-cyan-400 transition">
                        {resource.title}
                      </h4>
                      <p className="text-gray-400 text-sm">{resource.description}</p>
                    </div>
                    <ExternalLink className="w-5 h-5 text-cyan-400 flex-shrink-0 ml-2" />
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-8 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 p-6 rounded-lg border border-cyan-500/30 text-center">
          <p className="text-gray-300">
            More resources and materials will be provided to all registered participants before the event
          </p>
        </div>
      </div>
    </section>
  );
}
