import { ChevronDown } from 'lucide-react';

export function Hero() {
  const scrollToAbout = () => {
    const element = document.querySelector('#about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1655903724829-37b3cd3d4ab9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyaWNlJTIwZmllbGQlMjBwYWRkeSUyMGdyZWVufGVufDF8fHx8MTc3MzUwMjkxM3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Rice field"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl mb-6">
          Bashir Sandhu Rice Mill
        </h1>
        <p className="text-xl sm:text-2xl md:text-3xl mb-4 text-[#c5a655]">
          Premium Quality Rice Since Generations
        </p>
        <p className="text-lg sm:text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
          Processing the finest Super Basmati and PK-386 Rice for traders and exporters worldwide
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-4 bg-[#2d5016] text-white rounded-lg hover:bg-[#3d6820] transition-colors"
          >
            Request Bulk Order
          </button>
          <button
            onClick={() => document.querySelector('#products')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-4 bg-[#c5a655] text-white rounded-lg hover:bg-[#b59545] transition-colors"
          >
            View Our Products
          </button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <button
        onClick={scrollToAbout}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 text-white animate-bounce"
      >
        <ChevronDown size={40} />
      </button>
    </section>
  );
}
