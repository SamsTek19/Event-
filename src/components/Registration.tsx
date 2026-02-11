import { useState } from 'react';
import { supabase } from '../lib/supabase';
import { CheckCircle, AlertCircle, Loader } from 'lucide-react';

export default function Registration() {
  const [formData, setFormData] = useState({
    full_name: '',
    email: '',
    institution: '',
    role: '',
    registration_type: 'individual',
    team_name: '',
  });

  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setMessage('');

    try {
      const { error } = await supabase.from('registrations').insert([
        {
          full_name: formData.full_name,
          email: formData.email,
          institution: formData.institution,
          role: formData.role,
          registration_type: formData.registration_type,
          team_name: formData.registration_type === 'team' ? formData.team_name : null,
        },
      ]);

      if (error) throw error;

      setStatus('success');
      setMessage('Registration successful! We will contact you with more details.');
      setFormData({
        full_name: '',
        email: '',
        institution: '',
        role: '',
        registration_type: 'individual',
        team_name: '',
      });
    } catch (error) {
      setStatus('error');
      setMessage('Registration failed. Please try again or contact support.');
      console.error('Registration error:', error);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="register" className="py-20 bg-slate-800">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Register Now
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto mb-6"></div>
          <p className="text-xl text-gray-300">
            Secure your spot at this exciting cybersecurity event
          </p>
        </div>

        <div className="bg-slate-900 p-8 rounded-lg border border-cyan-500/20">
          {status === 'success' ? (
            <div className="text-center py-8">
              <CheckCircle className="w-16 h-16 text-green-400 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-white mb-2">Registration Successful!</h3>
              <p className="text-gray-300 mb-6">{message}</p>
              <button
                onClick={() => setStatus('idle')}
                className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-6 py-3 rounded-lg hover:from-cyan-600 hover:to-blue-600 transition"
              >
                Register Another Participant
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="full_name" className="block text-sm font-semibold text-gray-300 mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="full_name"
                  name="full_name"
                  required
                  value={formData.full_name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-slate-800 border border-cyan-500/20 rounded-lg text-white placeholder-gray-500 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 outline-none transition"
                  placeholder="Enter your full name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-gray-300 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-slate-800 border border-cyan-500/20 rounded-lg text-white placeholder-gray-500 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 outline-none transition"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label htmlFor="institution" className="block text-sm font-semibold text-gray-300 mb-2">
                  Institution / Organization *
                </label>
                <input
                  type="text"
                  id="institution"
                  name="institution"
                  required
                  value={formData.institution}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-slate-800 border border-cyan-500/20 rounded-lg text-white placeholder-gray-500 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 outline-none transition"
                  placeholder="Your institution or organization"
                />
              </div>

              <div>
                <label htmlFor="role" className="block text-sm font-semibold text-gray-300 mb-2">
                  Role *
                </label>
                <select
                  id="role"
                  name="role"
                  required
                  value={formData.role}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-slate-800 border border-cyan-500/20 rounded-lg text-white focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 outline-none transition"
                >
                  <option value="">Select your role</option>
                  <option value="student">Student</option>
                  <option value="professional">Professional</option>
                  <option value="educator">Educator</option>
                  <option value="researcher">Researcher</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label htmlFor="registration_type" className="block text-sm font-semibold text-gray-300 mb-2">
                  Registration Type *
                </label>
                <select
                  id="registration_type"
                  name="registration_type"
                  required
                  value={formData.registration_type}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-slate-800 border border-cyan-500/20 rounded-lg text-white focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 outline-none transition"
                >
                  <option value="individual">Individual</option>
                  <option value="team">Team</option>
                </select>
              </div>

              {formData.registration_type === 'team' && (
                <div>
                  <label htmlFor="team_name" className="block text-sm font-semibold text-gray-300 mb-2">
                    Team Name *
                  </label>
                  <input
                    type="text"
                    id="team_name"
                    name="team_name"
                    required={formData.registration_type === 'team'}
                    value={formData.team_name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-slate-800 border border-cyan-500/20 rounded-lg text-white placeholder-gray-500 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 outline-none transition"
                    placeholder="Enter your team name"
                  />
                </div>
              )}

              {status === 'error' && (
                <div className="flex items-center gap-2 p-4 bg-red-500/10 border border-red-500/20 rounded-lg">
                  <AlertCircle className="w-5 h-5 text-red-400 flex-shrink-0" />
                  <p className="text-red-400">{message}</p>
                </div>
              )}

              <button
                type="submit"
                disabled={status === 'loading'}
                className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-6 py-4 rounded-lg text-lg font-semibold hover:from-cyan-600 hover:to-blue-600 transition disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {status === 'loading' ? (
                  <>
                    <Loader className="w-5 h-5 animate-spin" />
                    Registering...
                  </>
                ) : (
                  'Complete Registration'
                )}
              </button>

              <p className="text-sm text-gray-400 text-center">
                By registering, you agree to receive event updates and information via email.
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
