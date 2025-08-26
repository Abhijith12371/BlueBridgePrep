import React, { useState } from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin,
  Send,
  ExternalLink,
  BookOpen,
  Users,
  Award
} from 'lucide-react';

const Footer: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      setEmail('');
      setTimeout(() => setIsSubscribed(false), 3000);
    }
  };

  const footerLinks = {
    Platform: [
      { name: 'All Topics', href: '#topics' },
      { name: 'Practice Tests', href: '#demo' },
      { name: 'Progress Tracking', href: '#' },
      { name: 'Study Plans', href: '#' }
    ],
    Resources: [
      { name: 'Study Guides', href: '#' },
      { name: 'Video Tutorials', href: '#' },
      { name: 'Practice Papers', href: '#' },
      { name: 'Tips & Tricks', href: '#' }
    ],
    Support: [
      { name: 'Help Center', href: '#' },
      { name: 'Contact Us', href: '#' },
      { name: 'FAQ', href: '#' },
      { name: 'Live Chat', href: '#' }
    ],
    Company: [
      { name: 'About Us', href: '#about' },
      { name: 'Our Team', href: '#' },
      { name: 'Careers', href: '#' },
      { name: 'Privacy Policy', href: '#' }
    ]
  };

  const socialLinks = [
    { icon: Facebook, href: '#', name: 'Facebook' },
    { icon: Twitter, href: '#', name: 'Twitter' },
    { icon: Instagram, href: '#', name: 'Instagram' },
    { icon: Linkedin, href: '#', name: 'LinkedIn' }
  ];

  const stats = [
    { icon: BookOpen, value: '10+', label: 'Complete Topics' },
    { icon: Users, value: '50K+', label: 'Active Students' },
    { icon: Award, value: '95%', label: 'Success Rate' }
  ];

  return (
    <footer className="text-white relative">

      {/* Main Footer */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Brand Section */}
          <div>
            <div className="mb-8">
              <h3 className="text-3xl font-bold gradient-text mb-4">
                BlueBridge Prep
              </h3>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                Master logical reasoning with our comprehensive platform. Join thousands of 
                successful students who have achieved their competitive exam goals with our 
                expert-curated content and smart learning techniques.
              </p>
              
              {/* Stats */}
              <div className="flex flex-wrap gap-6 mb-8">
                {stats.map((stat, index) => (
                  <div key={index} className="flex items-center gap-3 neon-card px-4 py-3 rounded-lg">
                    <stat.icon className="text-blue-400" size={24} />
                    <div>
                      <div className="text-xl font-bold gradient-text">{stat.value}</div>
                      <div className="text-sm text-cyan-200">{stat.label}</div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Contact Info */}
              <div className="space-y-3 mb-8">
                <div className="flex items-center gap-3 text-gray-300">
                  <Mail size={18} />
                  <span>support@bluebridgeprep.com</span>
                </div>
                <div className="flex items-center gap-3 text-gray-300">
                  <Phone size={18} />
                  <span>+91 98765 43210</span>
                </div>
                <div className="flex items-center gap-3 text-gray-300">
                  <MapPin size={18} />
                  <span>Mumbai, Maharashtra, India</span>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    className="neon-card p-3 rounded-full hover:shadow-lg hover:shadow-pink-400/50 transition-all duration-300 transform hover:scale-110"
                    aria-label={social.name}
                  >
                    <social.icon size={20} />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Links and Newsletter */}
          <div>
            {/* Newsletter */}
            <div className="mb-12">
              <h4 className="text-xl font-bold mb-4 text-white">Stay Updated</h4>
              <p className="text-gray-300 mb-6">
                Get the latest study tips, exam updates, and exclusive content delivered to your inbox.
              </p>
              
              <form onSubmit={handleSubscribe} className="relative">
                <div className="flex">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email address"
                    className="flex-1 neon-card border border-blue-500/30 rounded-l-lg px-4 py-3 focus:outline-none focus:border-purple-500 transition-colors text-white placeholder-gray-400"
                    required
                  />
                  <button
                    type="submit"
                    className="neon-button px-6 py-3 rounded-r-lg flex items-center gap-2"
                  >
                    <Send size={18} />
                  </button>
                </div>
                
                {isSubscribed && (
                  <div className="absolute -bottom-8 left-0 text-green-400 text-sm">
                    ✓ Successfully subscribed!
                  </div>
                )}
              </form>
            </div>

            {/* Footer Links */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-8">
              {Object.entries(footerLinks).map(([category, links]) => (
                <div key={category}>
                  <h4 className="font-semibold mb-4 text-white">{category}</h4>
                  <ul className="space-y-3">
                    {links.map((link, index) => (
                      <li key={index}>
                        <a
                          href={link.href}
                          className="text-gray-300 hover:text-purple-400 transition-colors flex items-center gap-1 group"
                        >
                          {link.name}
                          <ExternalLink size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-cyan-500/30 relative z-10">
        <div className="h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent mb-6"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6 relative">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <div className="text-gray-400 text-sm">
              © 2024 BlueBridge Prep. All rights reserved. Made with ❤️ in India.
            </div>
            <div className="flex gap-6 text-sm text-gray-400">
              <a href="#" className="hover:text-purple-400 transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-purple-400 transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-purple-400 transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;