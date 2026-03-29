import { Award, Shield, Cog, Truck, Globe, ThumbsUp } from 'lucide-react';

export function WhyChooseUs() {
  const reasons = [
    {
      icon: Award,
      title: 'Premium Quality Rice',
      description: 'Our rice undergoes rigorous quality checks at every stage, ensuring only the finest grains reach our customers.',
    },
    {
      icon: Shield,
      title: 'Trusted Supplier',
      description: 'Over 30 years of reliability and excellence have made us a preferred partner for rice traders globally.',
    },
    {
      icon: Cog,
      title: 'Modern Machinery',
      description: 'State-of-the-art processing equipment ensures consistent quality, minimal wastage, and maximum efficiency.',
    },
    {
      icon: Truck,
      title: 'Reliable Delivery',
      description: 'Timely and safe delivery of bulk orders with proper packaging to maintain freshness and quality.',
    },
    {
      icon: Globe,
      title: 'Export Standards',
      description: 'All our products meet international quality standards and export requirements for global markets.',
    },
    {
      icon: ThumbsUp,
      title: 'Customer Satisfaction',
      description: 'Dedicated support team and flexible solutions tailored to meet your specific bulk order requirements.',
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl mb-4 text-[#2d5016]">Why Choose Bashir Sandhu Rice Mill</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We combine traditional expertise with modern technology to deliver excellence in every grain
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            return (
              <div
                key={index}
                className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-all hover:-translate-y-1 border-t-4 border-[#c5a655]"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-[#2d5016] to-[#3d6820] rounded-lg flex items-center justify-center mb-6">
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl mb-3 text-[#2d5016]">{reason.title}</h3>
                <p className="text-gray-700">{reason.description}</p>
              </div>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-[#2d5016] to-[#3d6820] rounded-2xl p-12 text-white">
            <h3 className="text-3xl mb-4">Ready to Partner with Us?</h3>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Join hundreds of satisfied traders and exporters who trust us for their rice needs
            </p>
            <button
              onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-4 bg-[#c5a655] text-white rounded-lg hover:bg-[#b59545] transition-colors text-lg"
            >
              Contact Us Today
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
