import { Phone, Mail, MapPin } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-[#1a2e0d] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div className="md:col-span-2">
            <div className="flex flex-col mb-4">
              <span className="text-3xl">Bashir Sandhu</span>
              <span className="text-xl text-[#c5a655]">Rice Mill</span>
            </div>
            <p className="text-gray-300 mb-4">
              Processing premium quality Super Basmati and PK-386 rice for over 30 years. 
              Your trusted partner in rice trading and export.
            </p>
            <div className="space-y-2 text-sm text-gray-300">
              <div className="flex items-center gap-2">
                <Phone size={16} />
                <span>+92 348 7224647</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail size={16} />
                <span>bashirsandhuricemill@gmail.com</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin size={16} />
                <span>Main Link Road Qila Didar Singh, Saharn Chattah, Ali Pur Chattah, Gujranwala</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-4 text-[#c5a655]">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => scrollToSection('#home')}
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('#about')}
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  About Us
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('#products')}
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Our Products
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('#processing')}
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Processing
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('#contact')}
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="mb-4 text-[#c5a655]">Our Products</h4>
            <ul className="space-y-2 text-gray-300">
              <li>Super Basmati Rice</li>
              <li>PK-386 Rice</li>
              <li>White Rice</li>
              <li>Parboiled Rice</li>
              <li>Brown Rice</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © {currentYear} Bashir Sandhu Rice Mill. All rights reserved.
            </p>
            <p className="text-gray-400 text-sm">
              Serving the rice industry with quality and trust since 1994
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}