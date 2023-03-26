import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white px-8 py-10">
      <div className="max-w-7xl mx-auto">
        <div className="md:flex md:justify-between md:items-center">
          <div className="mb-8 md:mb-0">
            <h3 className="text-lg font-bold mb-2">LimaSmart</h3>
            <p className="text-gray-400">Nairobi, Kenya</p>
          </div>
          <div className="flex justify-between items-center">
            <ul className="md:flex md:space-x-4 space-y-4 md:space-y-0 mb-4 md:mb-0">
              <li><a href="#" className="hover:text-green-500">Home</a></li>
              <li><a href="#" className="hover:text-green-500">About</a></li>
              <li><a href="#" className="hover:text-green-500">Services</a></li>
              <li><a href="#" className="hover:text-green-500">Contact</a></li>
            </ul>
            <div className="flex items-center">
              <a href="#" className="hover:text-green-500 mr-6">
                <i className="fab fa-twitter">Twitter</i>
              </a>
              <a href="#" className="hover:text-green-500">
                <i className="fab fa-facebook">Facebook</i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
