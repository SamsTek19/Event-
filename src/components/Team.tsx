import {
  Lock,
  Share2,
  Globe,
  Mail,
  Cloud,
  CreditCard,
  Server,
  Smartphone,
  Eye,
  HardDrive,
  Crown,
  Linkedin,
  Youtube,
} from 'lucide-react';
import type { ComponentType } from 'react';

type TeamMember = {
  name: string;
  role: string;
  challenge: string;
  description: string;
  icon: ComponentType<{ className?: string }>;
  isLeader?: boolean;
  linkedin?: string;
  youtube?: string;
};

export default function Team() {
  const team: TeamMember[] = [
    {
      name: 'Gbadago Ishmael',
      role: 'Group Leader',
      challenge: 'Cloud & Data Security',
      description: 'Public or Private Data?',
      icon: Cloud,
      isLeader: true,
      linkedin:
        'https://www.linkedin.com/posts/ishmael-gbadago-4971532b9_cybersecurity-digitalhygiene-cloudsecurity-ugcPost-7444878582922924032-xD7M?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAExfx_MBxi8y9gqWZrOJCuU1Xx-swAdqBeE',
      youtube: 'https://youtu.be/47Mql8-9-ig',
    },
    {
      name: 'Samuel Sarfo Agyei',
      role: 'Facilitator',
      challenge: 'Password Management',
      description: 'Build or Break the Password',
      icon: Lock,
      linkedin:
        'https://www.linkedin.com/in/samuel-sarfo-3a0b952b1?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
      youtube: 'https://youtu.be/BcqxVTbKE6I',
    },
    {
      name: 'Zipporah Donkor',
      role: 'Facilitator',
      challenge: 'Safe Social Media',
      description: 'Overshare or Secure?',
      icon: Share2,
      linkedin:
        'https://www.linkedin.com/posts/zipporah-donkor-1728903bb_cybersecurity-digitalhygiene-socialmediasafety-activity-7444879608673443841-UMGH?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAGZ3qeYBNY5_fDuKmPgmekwZcmSlB-29TFc',
      youtube: 'https://youtu.be/ilj0NT3cFJQ',
    },
    {
      name: 'Adu Paul',
      role: 'Facilitator',
      challenge: 'Safe Browsing',
      description: 'Click or Skip?',
      icon: Globe,
      youtube: 'https://youtu.be/hsOlbPUUGUQ',
    },
    {
      name: 'Ebenezer Quarshie',
      role: 'Facilitator',
      challenge: 'Email Security',
      description: 'Phish or Legit?',
      icon: Mail,
      linkedin:
        'https://www.linkedin.com/posts/ebenezer-quarshie-9554702b0_cybersecurity-emailsecurity-phishingawareness-activity-7444887867509780480-4wPT?utm_medium=ios_app&rcm=ACoAAErRrFEB6R7eXGwvDvW4peoQwsNJBKv2Hkg&utm_source=social_share_send&utm_campaign=copy_link',
      youtube: 'https://youtu.be/Knb7ou7NbHQ?feature=shared',
    },
    {
      name: 'Nlenkiba Carlos Nkoten',
      role: 'Facilitator',
      challenge: 'Online Financial Safety',
      description: 'Scam or Safe Transaction?',
      icon: CreditCard,
      linkedin:
        'https://www.linkedin.com/posts/carlos-nkoten-72073b349_cybersecurity-onlinesafety-financialsecurity-activity-7444874539462803456-ADer?utm_source=share&utm_medium=member_ios&rcm=ACoAAFcj5UgB7Mi487JLqzBkw2BHTnffRZTokLM',
      youtube: 'https://youtu.be/24jBKGSkGRQ?si=xkXmLb3bf24XR03W',
    },
    {
      name: 'Joshua Okyere',
      role: 'Facilitator',
      challenge: 'Device & Software Security',
      description: 'Secure the Device',
      icon: Server,
      linkedin:
        'https://www.linkedin.com/posts/joshua-okyere-0671b930a_cybersecurity-digitalhygiene-informationsecurity-activity-7444886758548291584-8xMs?utm_source=share&utm_medium=member_desktop&rcm=ACoAAE6yJA8B-PQhUG75T72lBnq7-HxpgtzDxug',
      youtube: 'https://youtu.be/PunpdINg7vc',
    },
    {
      name: 'Michael Nugbley Esoun',
      role: 'Facilitator',
      challenge: 'Mobile Security',
      description: 'App Permission Trap',
      icon: Smartphone,
      linkedin:
        'https://www.linkedin.com/posts/michael-nugbley-282676310_would-you-give-a-flashlight-app-your-bank-ugcPost-7444862892593545217-mDnF?utm_source=share&utm_medium=member_android&rcm=ACoAAE8e6QIBLu73ygV1j7DK-l-MauFMQXr9B98',
      youtube: 'https://youtu.be/HgDN30mfdOg?si=Dh1gkSdVZTiC6Ssr',
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
      linkedin:
        'https://www.linkedin.com/posts/rouamba-daniel-a24318294_cybersecurity-backupawareness-datarecovery-share-7444885361589137409-GdGa?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAEc88LwB0-eraKyRnqR9NUivTPsa0PCWTvk',
      youtube: 'https://youtu.be/zN6unAfiYWo',
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
                  <p className="text-gray-400 text-sm mb-3">{member.description}</p>
                  {(member.linkedin || member.youtube) && (
                    <div className="flex flex-wrap gap-2">
                      {member.linkedin && (
                        <a
                          href={member.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 rounded-md bg-slate-700/80 px-2.5 py-1.5 text-xs font-medium text-cyan-300 transition hover:bg-slate-600 hover:text-white"
                          aria-label={`${member.name} on LinkedIn`}
                        >
                          <Linkedin className="h-4 w-4 shrink-0" />
                          LinkedIn
                        </a>
                      )}
                      {member.youtube && (
                        <a
                          href={member.youtube}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 rounded-md bg-slate-700/80 px-2.5 py-1.5 text-xs font-medium text-red-300 transition hover:bg-slate-600 hover:text-white"
                          aria-label={`${member.name} on YouTube`}
                        >
                          <Youtube className="h-4 w-4 shrink-0" />
                          YouTube
                        </a>
                      )}
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
