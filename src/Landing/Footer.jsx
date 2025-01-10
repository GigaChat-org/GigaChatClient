import React from 'react';

const Footer = () => {
  return (
    <div className='bg-gray-900 text-white'>
    <footer className="flex flex-col lg:flex-row justify-between items-center py-10 border-t-2 px-16">
  <div className="flex items-center space-x-4">
    <h1 className="text-xl font-bold">GigaChat</h1>
  </div>
  <div className="flex flex-col md:flex-row items-center py-5 space-x-4 space-y-4 md:space-y-0">
    <ul className="flex flex-col md:flex-row space-x-4 space-y-4 md:space-y-0">
      <li><a href="/terms" className="hover:text-cyan-400 transition-all">Terms of Service</a></li>
      <li><a href="/privacy-policies" className="hover:text-cyan-400 transition-all">Privacy Policy</a></li>
    </ul>
    <ul className="flex flex-col md:flex-row space-x-4 space-y-4 md:space-y-0">
      <li><a href="/community-guidelines" className="hover:text-cyan-400 transition-all">Community Guidelines</a></li>
      <li><a href="/refund-policies" className="hover:text-cyan-400 transition-all">Refund Policies</a></li>
    </ul>
  </div>
  <div className="flex items-center space-x-4">
    <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition-all">
      <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.334 3.608 1.31.975.975 1.248 2.242 1.31 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.334 2.633-1.31 3.608-.975.975-2.242 1.248-3.608 1.31-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.334-3.608-1.31-.975-.975-1.248-2.242-1.31-3.608-.058-1.266-.07-1.646-.07-4.85s.012-3.584.07-4.85c.062-1.366.334-2.633 1.31-3.608.975-.975 2.242-1.248 3.608-1.31 1.266-.058 1.646-.07 4.85-.07zm0-2.163c-3.259 0-3.667.014-4.947.072-1.281.058-2.418.27-3.29.542-.872.272-1.616.63-2.354 1.368-.738.738-1.096 1.482-1.368 2.354-.272.872-.484 2.009-.542 3.29-.058 1.28-.072 1.688-.072 4.947s.014 3.667.072 4.947c.058 1.281.27 2.418.542 3.29.272.872.63 1.616 1.368 2.354.738.738 1.482 1.096 2.354 1.368.872.272 2.009.484 3.29.542 1.28.058 1.688.072 4.947.072s3.667-.014 4.947-.072c1.281-.058 2.418-.27 3.29-.542.872-.272 1.616-.63 2.354-1.368.738-.738 1.096-1.482 1.368-2.354.272-.872.484-2.009.542-3.29.058-1.28.072-1.688.072-4.947s-.014-3.667-.072-4.947c-.058-1.281-.27-2.418-.542-3.29-.272-.872-.63-1.616-1.368-2.354-.738-.738-1.482-1.096-2.354-1.368-.872-.272-2.009-.484-3.29-.542-1.28-.058-1.688-.072-4.947-.072zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.162 6.162 6.162 6.162-2.759 6.162-6.162-2.759-6.162-6.162-6.162zm0 10.324c-2.297 0-4.162-1.865-4.162-4.162s1.865-4.162 4.162-4.162 4.162 1.865 4.162 4.162-1.865 4.162-4.162 4.162zm6.406-11.845c-.796 0-1.441.645-1.441 1.441s.645 1.441 1.441 1.441 1.441-.645 1.441-1.441-.645-1.441-1.441-1.441z"/>
      </svg>
    </a>
  </div>
</footer>

<div className="w-full border-t-2 mt-0">
  <p className="text-center py-4">© {new Date().getFullYear()} GigaChat | All Rights Reserved</p>
</div>

    </div>
  );
};

export default Footer;
