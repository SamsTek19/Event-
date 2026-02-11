import { Mail, HelpCircle, MessageCircle } from 'lucide-react';

export default function Contact() {
  const faqs = [
    {
      question: 'Do I need technical background to attend?',
      answer: 'No! This event is designed for everyone, regardless of technical expertise. Our challenges are accessible to beginners while still engaging for experienced users.',
    },
    {
      question: 'What should I bring to the event?',
      answer: 'Just bring yourself and enthusiasm to learn! All materials and resources will be provided. If attending virtually, ensure you have a stable internet connection.',
    },
    {
      question: 'Can I attend virtually?',
      answer: 'Yes! We offer both in-person and virtual participation options. Virtual participants will have full access to all challenges and resources.',
    },
    {
      question: 'Is there a registration fee?',
      answer: 'Registration details including any fees will be confirmed upon completion of your registration. Early bird discounts may be available.',
    },
  ];

  return (
    <section className="py-20 bg-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Contact & Support
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          <div className="bg-slate-900 p-8 rounded-lg border border-cyan-500/20">
            <div className="flex items-center gap-3 mb-6">
              <MessageCircle className="w-8 h-8 text-cyan-400" />
              <h3 className="text-2xl font-bold text-white">Get in Touch</h3>
            </div>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Mail className="w-6 h-6 text-cyan-400 flex-shrink-0 mt-1" />
                <div>
                  <p className="text-gray-400 text-sm mb-1">Email us at</p>
                  <a href="mailto:info@cyb1event.com" className="text-white hover:text-cyan-400 transition text-lg">
                    info@cyb1event.com
                  </a>
                </div>
              </div>
            </div>
            <div className="mt-6 p-4 bg-cyan-500/10 rounded-lg border border-cyan-500/20">
              <p className="text-gray-300 text-sm">
                We aim to respond to all inquiries within 24-48 hours. For urgent matters, please mention "Urgent" in your subject line.
              </p>
            </div>
          </div>

          <div className="bg-slate-900 p-8 rounded-lg border border-cyan-500/20">
            <div className="flex items-center gap-3 mb-6">
              <HelpCircle className="w-8 h-8 text-cyan-400" />
              <h3 className="text-2xl font-bold text-white">Frequently Asked Questions</h3>
            </div>
            <div className="space-y-4">
              {faqs.slice(0, 2).map((faq, index) => (
                <div key={index} className="pb-4 border-b border-slate-700 last:border-0">
                  <h4 className="text-white font-semibold mb-2">{faq.question}</h4>
                  <p className="text-gray-400 text-sm">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="bg-slate-900 p-8 rounded-lg border border-cyan-500/20">
          <h3 className="text-2xl font-bold text-white mb-6 text-center">More FAQs</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {faqs.slice(2).map((faq, index) => (
              <div key={index}>
                <h4 className="text-white font-semibold mb-2">{faq.question}</h4>
                <p className="text-gray-400 text-sm">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
