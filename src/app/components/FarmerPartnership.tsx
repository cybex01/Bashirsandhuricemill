import { Handshake, Banknote, GraduationCap, Tractor } from 'lucide-react';

export function FarmerPartnership() {
  const benefits = [
    {
      icon: Handshake,
      title: 'Fair Pricing',
      description: 'We offer competitive and transparent pricing for paddy, ensuring farmers receive fair compensation for their hard work.',
    },
    {
      icon: Banknote,
      title: 'Timely Payments',
      description: 'Guaranteed prompt payment upon delivery, helping farmers maintain their cash flow and plan their finances.',
    },
    {
      icon: GraduationCap,
      title: 'Technical Support',
      description: 'Free agricultural guidance and training on modern farming techniques to improve yield and quality.',
    },
    {
      icon: Tractor,
      title: 'Quality Seeds',
      description: 'Access to certified seeds and farming inputs at subsidized rates for our partner farmers.',
    },
  ];

  return (
    <section id="farmers" className="py-20 bg-[#2d5016] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <h2 className="text-4xl mb-6">Partnering with Local Farmers</h2>
            <p className="text-lg mb-8 text-gray-200">
              At Bashir Sandhu Rice Mill, we believe in building strong relationships with our farming 
              community. We work directly with over 500 local farmers, providing them with support, 
              resources, and fair opportunities to grow together.
            </p>
            <p className="text-lg mb-8 text-gray-200">
              Our farmer partnership program is built on trust, transparency, and mutual growth. We 
              ensure that farmers receive the best value for their produce while maintaining the 
              highest quality standards in our rice products.
            </p>

            <div className="grid sm:grid-cols-2 gap-6">
              {benefits.map((benefit, index) => {
                const Icon = benefit.icon;
                return (
                  <div key={index} className="flex gap-4">
                    <div className="flex-shrink-0">
                      <Icon className="w-8 h-8 text-[#c5a655]" />
                    </div>
                    <div>
                      <h4 className="mb-2">{benefit.title}</h4>
                      <p className="text-sm text-gray-300">{benefit.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1737784605867-72d3fc2909f2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYXJtZXIlMjBoYXJ2ZXN0aW5nJTIwcmljZXxlbnwxfHx8fDE3NzM1MTM0NjR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Farmer harvesting rice"
              className="rounded-lg shadow-2xl"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#2d5016] to-transparent rounded-lg"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
