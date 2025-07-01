import React from "react";
//Footer 
const Footer = () => {
  return (
    <footer className="bg-blue-600 text-white py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h2 className="text-xl font-bold mb-4">JobPortal</h2>
            <p>
              Your trusted platform to find the best jobs and hire top talents.
              Build your career with us!
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="/about"
                  className="hover:underline hover:text-gray-200"
                >
                  About Us
                </a>
              </li>
              <li>
                <a href="/jobs" className="hover:underline hover:text-gray-200">
                  Browse Jobs
                </a>
              </li>
              <li>
                <a
                  href="/employers"
                  className="hover:underline hover:text-gray-200"
                >
                  Employers
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  className="hover:underline hover:text-gray-200"
                >
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="/privacy-policy"
                  className="hover:underline hover:text-gray-200"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="/terms"
                  className="hover:underline hover:text-gray-200"
                >
                  Terms & Conditions
                </a>
              </li>
              <li>
                <a href="/faq" className="hover:underline hover:text-gray-200">
                  FAQ
                </a>
              </li>
              <li>
                <a href="/help" className="hover:underline hover:text-gray-200">
                  Help Center
                </a>
              </li>
            </ul>
          </div>

          {/* Subscribe Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Subscribe</h3>
            <p>Stay updated with the latest job offers and news.</p>
            <form className="mt-4 flex">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 rounded-l-md text-gray-800 focus:outline-none"
              />
              <button
                type="submit"
                className="bg-green-600 px-4 py-2 rounded-r-md text-white font-semibold hover:bg-green-700"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <hr className="my-8 border-gray-400" />

        {/* Footer Bottom */}
        <div className="flex flex-col lg:flex-row justify-between items-center">
          <p className="text-sm text-center lg:text-left">
            © 2024 JobPortal. All Rights Reserved.
          </p>
          <div className="flex space-x-4 mt-4 lg:mt-0">
            <a
              href="https://facebook.com"
              className="hover:text-gray-200"
              aria-label="Facebook"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M22.675 0h-21.35c-.734 0-1.325.591-1.325 1.325v21.351c0 .734.591 1.325 1.325 1.325h11.495v-9.293h-3.125v-3.625h3.125v-2.672c0-3.1 1.894-4.788 4.659-4.788 1.325 0 2.464.099 2.794.143v3.241h-1.917c-1.504 0-1.794.715-1.794 1.763v2.313h3.589l-.467 3.625h-3.122v9.293h6.117c.734 0 1.325-.591 1.325-1.325v-21.35c0-.735-.591-1.325-1.325-1.325z" />
              </svg>
            </a>
            <a
              href="https://twitter.com"
              className="hover:text-gray-200"
              aria-label="Twitter"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.611 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-2.723 0-4.93 2.207-4.93 4.93 0 .386.044.763.128 1.124-4.096-.205-7.728-2.168-10.164-5.144-.424.726-.666 1.571-.666 2.473 0 1.708.87 3.213 2.188 4.096-.807-.026-1.566-.248-2.228-.616v.062c0 2.388 1.698 4.384 3.951 4.838-.413.112-.849.171-1.296.171-.317 0-.626-.031-.927-.088.627 1.956 2.444 3.379 4.6 3.418-1.68 1.318-3.8 2.104-6.102 2.104-.396 0-.787-.023-1.172-.068 2.179 1.396 4.768 2.21 7.548 2.21 9.057 0 14.01-7.506 14.01-14.01 0-.213-.005-.425-.014-.637.962-.694 1.8-1.562 2.462-2.549z" />
              </svg>
            </a>
            <a
              href="https://linkedin.com"
              className="hover:text-gray-200"
              aria-label="LinkedIn"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M19.672 3.001h-15.343c-.747 0-1.35.603-1.35 1.35v15.3c0 .747.603 1.35 1.35 1.35h15.344c.747 0 1.35-.603 1.35-1.35v-15.3c0-.747-.603-1.35-1.35-1.35zm-11.558 17.056h-3.3v-8.667h3.3v8.667zm-1.65-9.927c-1.053 0-1.9-.847-1.9-1.9 0-1.054.847-1.9 1.9-1.9 1.054 0 1.9.847 1.9 1.9 0 1.053-.847 1.9-1.9 1.9zm13.458 9.927h-3.3v-4.6c0-1.099-.023-2.513-1.531-2.513-1.533 0-1.768 1.2-1.768 2.437v4.676h-3.299v-8.667h3.168v1.183h.044c.439-.834 1.512-1.713 3.11-1.713 3.32 0 3.933 2.183 3.933 5.018v4.179z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
