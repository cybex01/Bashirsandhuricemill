import { useState } from 'react';
import { X } from 'lucide-react';
import processingFacilityImage from 'figma:asset/bcabf1ca5012e257f5cc8815c277265e49ddf1e0.png';

export function Gallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const images = [
    {
      url: 'https://images.unsplash.com/photo-1655903724829-37b3cd3d4ab9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyaWNlJTIwZmllbGQlMjBwYWRkeSUyMGdyZWVufGVufDF8fHx8MTc3MzUwMjkxM3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      title: 'Lush Rice Fields',
    },
    {
      url: processingFacilityImage,
      title: 'Bashir Sandhu Rice Mill - Processing Facility',
    },
    {
      url: 'https://images.unsplash.com/photo-1627482265910-5c0ff6bee088?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw0fHxwcmVtaXVtJTIwYmFzbWF0aSUyMHJpY2UlMjBncmFpbnMlMjBjbG9zZSUyMHVwfGVufDF8fHx8MTc3NDYzMTY5Nnww&ixlib=rb-4.1.0&q=80&w=1080',
      title: 'Premium Rice Grains',
    },
    {
      url: 'https://images.unsplash.com/photo-1646980990815-1e97d5ee932f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw1fHxwcmVtaXVtJTIwYmFzbWF0aSUyMHJpY2UlMjBncmFpbnMlMjBjbG9zZSUyMHVwfGVufDF8fHx8MTc3NDYzMTY5Nnww&ixlib=rb-4.1.0&q=80&w=1080',
      title: 'Golden Rice Grains',
    },
    {
      url: 'https://images.unsplash.com/photo-1686820740687-426a7b9b2043?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwzfHx3aGl0ZSUyMHJpY2UlMjBncmFpbnMlMjB0ZXh0dXJlfGVufDF8fHx8MTc3NDYzMTY5N3ww&ixlib=rb-4.1.0&q=80&w=1080',
      title: 'Quality Rice Grains',
    },
  ];

  return (
    <section id="gallery" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl mb-4 text-[#2d5016]">Our Gallery</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A glimpse into our rice fields, processing facilities, and premium products
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((image, index) => (
            <div
              key={index}
              className="relative group cursor-pointer overflow-hidden rounded-lg shadow-md hover:shadow-2xl transition-all aspect-[4/3]"
              onClick={() => setSelectedImage(image.url)}
            >
              <img
                src={image.url}
                alt={image.title}
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <p className="text-white text-lg">{image.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors"
            onClick={() => setSelectedImage(null)}
          >
            <X size={32} />
          </button>
          <img
            src={selectedImage}
            alt="Gallery image"
            className="max-w-full max-h-full object-contain"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  );
}
