import React from "react";
// Banner jsx 
const HeroBanner = () => {
  return (
    <div className="relative w-full h-screen bg-gradient-to-r from-indigo-900 via-purple-800 to-blue-900 overflow-hidden">
      {/* Background Animation */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-48 h-48 bg-gradient-to-tr from-green-400 to-blue-600 rounded-full blur-3xl opacity-50 animate-pulse"></div>
        <div className="absolute top-1/3 left-1/4 w-72 h-72 bg-gradient-to-br from-pink-500 to-purple-600 rounded-full blur-2xl opacity-40 animate-bounce"></div>
        <div className="absolute bottom-10 right-10 w-56 h-56 bg-gradient-to-tl from-yellow-400 to-red-500 rounded-full blur-3xl opacity-30 animate-pulse"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6 sm:px-12">
        <h1 className="text-white text-4xl sm:text-6xl font-extrabold leading-tight tracking-wide mb-6 animate-fade-in">
          Level Up Your <span className="text-yellow-400">Coding Skills</span>
        </h1>
        <p className="text-white text-lg sm:text-xl opacity-90 mb-8">
          Learn, Practice, and Build Projects to become a Pro Developer 🚀
        </p>
        <a
          href="#"
          className="bg-yellow-500 text-black px-8 py-4 text-lg font-semibold rounded-lg shadow-lg transition-transform transform hover:scale-110 hover:bg-yellow-600 focus:outline-none focus:ring-4 focus:ring-yellow-300 animate-slide-up"
        >
          Start Learning Now
        </a>
      </div>

      {/* Decorative SVG Waves */}
      <div className="absolute bottom-0 w-full overflow-hidden">
        <svg
          className="relative w-full h-32"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
        >
          <path
            fill="#ffffff"
            fillOpacity="1"
            d="M0,64L48,96C96,128,192,192,288,213.3C384,235,480,213,576,192C672,171,768,149,864,160C960,171,1056,213,1152,224C1248,235,1344,213,1392,202.7L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </div>

      {/* CSS Animations */}
      <style jsx>{`
        @keyframes fade-in {
          0% {
            opacity: 0;
            transform: translateY(-20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slide-up {
          0% {
            opacity: 0;
            transform: translateY(40px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in {
          animation: fade-in 1s ease-in-out forwards;
        }
        .animate-slide-up {
          animation: slide-up 1.2s ease-in-out forwards;
        }
        .animate-pulse {
          animation: pulse 3s infinite;
        }
        .animate-bounce {
          animation: bounce 5s infinite;
        }
        @keyframes bounce {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-15px);
          }
        }
      `}</style>
    </div>
  );
};

export default HeroBanner;
