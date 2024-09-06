import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-light-800 dark:bg-dark-500 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          {/* Column 1: Logo & Description */}
          <div>
            <h3 className="text-3xl font-bold text-dark-300 dark:text-light-400">Startup<span className="text-primary-500">io</span></h3>
            <p className="mt-4 text-dark-300 dark:text-light-400">
              Innovate and collaborate with peers to turn your ideas into reality.
              Join a thriving community of builders, thinkers, and investors.
            </p>
          </div>

          {/* Column 2: Important Links (similar to Navbar) */}
          <div>
            <h4 className="text-xl font-semibold text-dark-300 dark:text-light-400 mb-4">Important Links</h4>
            <nav className="space-y-2">
              <a href="#" className="block text-dark-300 dark:text-light-400 hover:text-primary-500 transition">Home</a>
              <a href="#" className="block text-dark-300 dark:text-light-400 hover:text-primary-500 transition">How it Works</a>
              <a href="#" className="block text-dark-300 dark:text-light-400 hover:text-primary-500 transition">Explore Projects</a>
              <a href="#" className="block text-dark-300 dark:text-light-400 hover:text-primary-500 transition">Find Mentors</a>
              <a href="#" className="block text-dark-300 dark:text-light-400 hover:text-primary-500 transition">Login/Sign Up</a>
            </nav>
          </div>

          {/* Column 3: Contact Form */}
          <div>
            <h4 className="text-xl font-semibold text-dark-300 dark:text-light-400 mb-4">Contact Us</h4>
            <form className="space-y-4">
              <input
                type="email"
                placeholder="Your Email"
                className="w-full p-2 bg-light-700 dark:bg-dark-300 text-dark-300 dark:text-light-400 border border-light-400 dark:border-dark-200 rounded-lg focus:ring-2 focus:ring-primary-500 transition"
              />
              <textarea
                placeholder="Your Message"
                className="w-full p-2 bg-light-700 dark:bg-dark-300 text-dark-300 dark:text-light-400 border border-light-400 dark:border-dark-200 rounded-lg focus:ring-2 focus:ring-primary-500 transition"
                rows={4}
              />
              <button
                type="submit"
                className="w-full p-2 bg-primary-500 text-light-900 rounded-lg hover:bg-primary-400 transition"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Footer: Links and Social Media */}
        <div className="mt-8 border-t border-light-400 dark:border-dark-200 pt-4 flex flex-col md:flex-row justify-between items-center">
          {/* Footer Links */}
          <div className="flex space-x-6">
            <a href="#" className="text-dark-300 dark:text-light-400 hover:text-primary-500 transition">About Us</a>
            <a href="#" className="text-dark-300 dark:text-light-400 hover:text-primary-500 transition">Privacy Policy</a>
            <a href="#" className="text-dark-300 dark:text-light-400 hover:text-primary-500 transition">Terms of Use</a>
          </div>

          {/* Social Media Icons */}
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-dark-300 dark:text-light-400 hover:text-primary-500 transition">
              <svg className="h-6 w-6" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path d="M22.46 6c-.77.35-1.6.6-2.46.71.88-.52 1.56-1.35 1.88-2.34-.82.49-1.74.85-2.71 1.05-.77-.82-1.88-1.34-3.1-1.34-2.34 0-4.23 1.89-4.23 4.22 0 .33.04.65.1.96-3.52-.18-6.63-1.87-8.72-4.44-.36.61-.57 1.32-.57 2.08 0 1.44.73 2.71 1.83 3.46-.68-.02-1.31-.21-1.86-.52v.05c0 2.02 1.44 3.7 3.35 4.09-.35.09-.72.14-1.1.14-.27 0-.52-.02-.78-.07.53 1.64 2.06 2.83 3.87 2.87-1.42 1.11-3.22 1.78-5.18 1.78-.34 0-.67-.02-1-.06 1.85 1.18 4.05 1.87 6.42 1.87 7.71 0 11.93-6.39 11.93-11.94 0-.18 0-.36-.01-.54.82-.59 1.54-1.34 2.1-2.19z"/>
              </svg>
            </a>
            <a href="#" className="text-dark-300 dark:text-light-400 hover:text-primary-500 transition">
              <svg className="h-6 w-6" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-10 19h-3v-9h3v9zm-1.5-10.29c-.966 0-1.75-.783-1.75-1.75s.784-1.75 1.75-1.75 1.75.783 1.75 1.75-.784 1.75-1.75 1.75zm11.5 10.29h-3v-4.5c0-1.379-.027-3.155-1.923-3.155-1.924 0-2.217 1.504-2.217 3.057v4.598h-3v-9h2.877v1.233h.042c.4-.757 1.377-1.555 2.834-1.555 3.031 0 3.589 1.995 3.589 4.587v4.735z"/>
              </svg>
            </a>
            <a href="#" className="text-dark-300 dark:text-light-400 hover:text-primary-500 transition">
              <svg className="h-6 w-6" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path d="M22.675 0h-21.35c-.733 0-1.325.593-1.325 1.325v21.351c0 .732.593 1.324 1.325 1.324h21.351c.732 0 1.324-.592 1.324-1.324v-21.35c0-.733-.592-1.326-1.325-1.326zm-14.525 20.303h-3v-9h3v9zm-1.5-10.29c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.783 1.75 1.75-.784 1.75-1.75 1.75zm15 10.29h-3v-4.5c0-1.379-.027-3.155-1.923-3.155-1.924 0-2.217 1.504-2.217 3.057v4.598h-3v-9h2.877v1.233h.042c.4-.757 1.377-1.555 2.834-1.555 3.031 0 3.589 1.995 3.589 4.587v4.735z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
