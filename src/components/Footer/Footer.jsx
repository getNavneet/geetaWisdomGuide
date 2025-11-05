import React, { useState } from 'react';

// Using a darker shade (950) for a richer, more modern contrast.
const Footer = () => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState('');

  const handleSubscribe = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setMessage('');

    // --- Placeholder Subscription Logic ---
    // In a real application, you would send this 'email' to a backend service (e.g., Mailchimp, database).
    setTimeout(() => {
      console.log(`Subscribed email: ${email}`);
      setIsSubmitting(false);
      setMessage('Thank you for subscribing! You will receive our latest updates.');
      setEmail('');
    }, 1500);
    // ----------------------------------------
  };

  // Inline SVG for the email icon
  const MailIcon = () => (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width="20" 
      height="20" 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      className="inline-block mr-2 text-orange-400"
    >
      <rect width="20" height="16" x="2" y="4" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  );

  return (
    <footer className="w-full bg-orange-950 text-white pt-12 pb-6">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 border-b border-orange-800 pb-10">

          {/* 1. Branding & Mission */}
          <div className="space-y-4">
            <h3 className="text-2xl font-extrabold text-orange-400">
              Geeta Wisdom Guide
            </h3>
            <p className="text-sm text-orange-300">
              Exploring eternal truths and practical wisdom from the Bhagavad Gita for modern life.
            </p>
          </div>

          {/* 2. Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white mb-3">Quick Links</h4>
            <ul className="space-y-2 text-orange-300 text-sm">
              <li><a href="#" className="hover:text-orange-100 transition duration-200">Our Mission</a></li>
              <li><a href="#" className="hover:text-orange-100 transition duration-200">Chapted Guides</a></li>
              <li><a href="#" className="hover:text-orange-100 transition duration-200">Community</a></li>
            </ul>
          </div>

          {/* 3. Legal & Contact */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white mb-3">Support</h4>
            <ul className="space-y-2 text-orange-300 text-sm">
              <li><a href="#" className="hover:text-orange-100 transition duration-200">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-orange-100 transition duration-200">Terms of Service</a></li>
              <li className="pt-3">
                <a 
                  href="mailto:contact@geetawisdomguide.com" 
                  className="hover:text-orange-100 flex items-center transition duration-200"
                >
                  <MailIcon />
                  contact@geetawisdomguide.com
                </a>
              </li>
            </ul>
          </div>

          {/* 4. Newsletter Subscription */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white mb-3">Stay Updated</h4>
            <p className="text-sm text-orange-300">
              Subscribe to receive the latest translations and spiritual insights directly to your inbox.
            </p>
            
            <form onSubmit={handleSubscribe} className="flex flex-col space-y-2">
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full px-4 py-2 text-orange-950 bg-orange-100 border border-orange-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
              />
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-2 px-4 bg-orange-600 text-white font-bold rounded-lg hover:bg-orange-700 transition duration-200 disabled:bg-orange-800 disabled:cursor-wait"
              >
                {isSubmitting ? 'Subscribing...' : 'Subscribe'}
              </button>
            </form>
            {message && (
              <p className={`text-sm ${message.includes('Thank you') ? 'text-green-400' : 'text-red-400'}`}>
                {message}
              </p>
            )}
          </div>
          
        </div>

        {/* Bottom Copyright Bar */}
        <div className="pt-6 text-center text-orange-500 text-sm">
          &copy; {new Date().getFullYear()} Geeta Wisdom Guide. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;