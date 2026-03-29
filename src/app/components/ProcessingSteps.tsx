import { Droplets, Disc, Sparkles, BarChart3, Package } from 'lucide-react';

export function ProcessingSteps() {
  const steps = [
    {
      icon: Droplets,
      title: 'Cleaning',
      description: 'Paddy is thoroughly cleaned to remove dust, stones, and foreign materials using advanced cleaning equipment.',
    },
    {
      icon: Disc,
      title: 'Husking',
      description: 'Rice hulls are removed using rubber roll huskers while maintaining grain integrity and minimal breakage.',
    },
    {
      icon: Sparkles,
      title: 'Polishing',
      description: 'Rice is polished to achieve the desired whiteness and shine, removing the bran layer for premium appearance.',
    },
    {
      icon: BarChart3,
      title: 'Grading',
      description: 'Electronic color sorters and length graders ensure uniform size and quality, removing discolored or broken grains.',
    },
    {
      icon: Package,
      title: 'Packaging',
      description: 'Final product is packaged in moisture-proof bags of various sizes suitable for export and bulk orders.',
    },
  ];

  return (
    <section id="processing" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl mb-4 text-[#2d5016]">Our Rice Processing Steps</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From paddy to premium rice, our state-of-the-art processing ensures the highest quality
          </p>
        </div>

        <div className="relative">
          {/* Timeline line for desktop */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-[#c5a655]"></div>

          {/* Steps */}
          <div className="space-y-12">
            {steps.map((step, index) => {
              const Icon = step.icon;
              const isEven = index % 2 === 0;

              return (
                <div key={index} className="relative">
                  <div className={`md:flex items-center ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                    {/* Content */}
                    <div className={`md:w-5/12 ${isEven ? 'md:text-right md:pr-12' : 'md:pl-12'}`}>
                      <div className="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow">
                        <h3 className="text-2xl mb-3 text-[#2d5016]">{step.title}</h3>
                        <p className="text-gray-700">{step.description}</p>
                      </div>
                    </div>

                    {/* Icon */}
                    <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 w-16 h-16 bg-[#c5a655] rounded-full items-center justify-center shadow-lg z-10">
                      <Icon className="w-8 h-8 text-white" />
                    </div>

                    {/* Mobile Icon */}
                    <div className="md:hidden flex items-center gap-4 mb-2">
                      <div className="w-12 h-12 bg-[#c5a655] rounded-full flex items-center justify-center shadow-lg">
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                    </div>

                    {/* Spacer */}
                    <div className="hidden md:block md:w-5/12"></div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
