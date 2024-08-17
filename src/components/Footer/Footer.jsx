import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faTwitter, faLinkedin, faFacebook, faYoutube } from '@fortawesome/free-brands-svg-icons';

function Footer() {
  return (
    <footer className="bg-white py-8 border-t">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-auto mb-6 md:mb-0">
            <img src="src\assets\Dark Illustrative The Mafia Gaming Logo (8).png" alt="" className="w-12 mb-4" />
            <div className="flex space-x-4">
              <a href="#" className="text-gray-600"><FontAwesomeIcon icon={faInstagram} /></a>
              <a href="#" className="text-gray-600"><FontAwesomeIcon icon={faTwitter} /></a>
              <a href="#" className="text-gray-600"><FontAwesomeIcon icon={faLinkedin} /></a>
              <a href="#" className="text-gray-600"><FontAwesomeIcon icon={faFacebook} /></a>
              <a href="#" className="text-gray-600"><FontAwesomeIcon icon={faYoutube} /></a>
            </div>
          </div>
          <div className="w-full md:w-auto mb-6 md:mb-0">
            <h4 className="font-bold mb-4">Company</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600">About us</a></li>
              <li><a href="#" className="text-gray-600">Terms & privacy</a></li>
              <li><a href="#" className="text-gray-600">Contact Us</a></li>
            </ul>
          </div>
          <div className="w-full md:w-auto mb-6 md:mb-0">
            <h4 className="font-bold mb-4">Download</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600">iOS & Android</a></li>
              <li><a href="#" className="text-gray-600">Mac & Windows</a></li>
            </ul>
          </div>
          <div className="w-full md:w-auto mb-6 md:mb-0">
            <h4 className="font-bold mb-4">Resources</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600">Help center</a></li>
            </ul>
          </div>
          <div className="w-full md:w-auto mb-6 md:mb-0">
            <h4 className="font-bold mb-4">Kreeda For</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600">Enterprise</a></li>
              <li><a href="#" className="text-gray-600">Personal</a></li>
            </ul>
          </div>
        </div>
        <div className="flex flex-wrap justify-between items-center mt-8">
          <div className="flex items-center space-x-4">
            <a href="#" className="text-gray-600">Cookie settings</a>
          </div>
          <div className="text-gray-600">&copy; 2024 Kreeda</div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
