import { ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-white mb-4">ChE Undergraduate Advisory Board</h3>
            <p className="text-gray-300 mb-4 leading-relaxed max-w-md">
              Representing undergraduate students in the McKetta Department of Chemical Engineering 
              at The University of Texas at Austin. Working together to enhance the student experience 
              and build a stronger academic community.
            </p>
            <div className="flex space-x-4">
              <button className="text-gray-300 hover:text-orange-400 transition-colors">
                Follow us on Instagram
              </button>
            </div>
          </div>

          <div>
            <h4 className="text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-gray-300 hover:text-orange-400 transition-colors">About Us</Link></li>
              <li><Link to="/members" className="text-gray-300 hover:text-orange-400 transition-colors">Board Members</Link></li>
              <li><Link to="/resources" className="text-gray-300 hover:text-orange-400 transition-colors">Resources</Link></li>
              <li><Link to="/news" className="text-gray-300 hover:text-orange-400 transition-colors">News</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-orange-400 transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white mb-4">External Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="https://che.utexas.edu" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-orange-400 transition-colors flex items-center">
                  McKetta Department <ExternalLink className="h-3 w-3 ml-1" />
                </a>
              </li>
              <li>
                <a href="https://utexas.edu" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-orange-400 transition-colors flex items-center">
                  UT Austin <ExternalLink className="h-3 w-3 ml-1" />
                </a>
              </li>
              <li>
                <a href="https://canvas.utexas.edu" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-orange-400 transition-colors flex items-center">
                  Canvas <ExternalLink className="h-3 w-3 ml-1" />
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-orange-400 transition-colors flex items-center">
                  Student Organizations <ExternalLink className="h-3 w-3 ml-1" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2025 UT Austin Chemical Engineering Undergraduate Advisory Board. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <button className="text-gray-400 hover:text-orange-400 transition-colors text-sm">
                Privacy Policy
              </button>
              <button className="text-gray-400 hover:text-orange-400 transition-colors text-sm">
                Terms of Use
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}