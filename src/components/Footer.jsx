// Footer.jsx Component
import React from "react";

const Footer = () => (
    <footer className="bg-white/50 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <h4 className="text-sm font-semibold text-gray-900 mb-4">Product</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-500 hover:text-purple-600">Features</a></li>
              <li><a href="#" className="text-gray-500 hover:text-purple-600">Pricing</a></li>
              <li><a href="#" className="text-gray-500 hover:text-purple-600">FAQ</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-gray-900 mb-4">Company</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-500 hover:text-purple-600">Lists</a></li>
              <li><a href="#" className="text-gray-500 hover:text-purple-600">About</a></li>
              <li><a href="#" className="text-gray-500 hover:text-purple-600">Blog</a></li>
              <li><a href="#" className="text-gray-500 hover:text-purple-600">Careers</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-gray-900 mb-4">Resources</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-500 hover:text-purple-600">Documentation</a></li>
              <li><a href="#" className="text-gray-500 hover:text-purple-600">Support</a></li>
              <li><a href="#" className="text-gray-500 hover:text-purple-600">Privacy</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-gray-900 mb-4">Connect</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-500 hover:text-purple-600">Twitter</a></li>
              <li><a href="#" className="text-gray-500 hover:text-purple-600">Instagram</a></li>
              <li><a href="#" className="text-gray-500 hover:text-purple-600">LinkedIn</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
  export default Footer;