import { Phone, Mail, MapPin, Send } from 'lucide-react';
import { useState } from 'react';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    quantity: '',
    product: 'Super Basmati Rice',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    alert('Thank you for your inquiry! We will contact you soon regarding your bulk order.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      company: '',
      quantity: '',
      product: 'Super Basmati Rice',
      message: '',
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl mb-4 text-[#2d5016]">Contact Us for Bulk Orders</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get in touch with us for bulk orders, export inquiries, or partnership opportunities
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-gray-50 p-8 rounded-xl shadow-md">
            <h3 className="text-2xl mb-6 text-[#2d5016]">Request a Quote</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block mb-2 text-gray-700">Full Name *</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#c5a655] bg-white"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block mb-2 text-gray-700">Email Address *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#c5a655] bg-white"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block mb-2 text-gray-700">Phone Number *</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#c5a655] bg-white"
                    placeholder="+92 300 1234567"
                  />
                </div>
                <div>
                  <label className="block mb-2 text-gray-700">Company Name</label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#c5a655] bg-white"
                    placeholder="Your company"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block mb-2 text-gray-700">Product *</label>
                  <select
                    name="product"
                    value={formData.product}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#c5a655] bg-white"
                  >
                    <option value="Super Basmati Rice">Super Basmati Rice</option>
                    <option value="PK-386 Rice">PK-386 Rice</option>
                    <option value="Both Products">Both Products</option>
                  </select>
                </div>
                <div>
                  <label className="block mb-2 text-gray-700">Quantity (Tons) *</label>
                  <input
                    type="number"
                    name="quantity"
                    value={formData.quantity}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#c5a655] bg-white"
                    placeholder="e.g., 50"
                  />
                </div>
              </div>

              <div>
                <label className="block mb-2 text-gray-700">Additional Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#c5a655] bg-white"
                  placeholder="Any specific requirements or questions..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full py-4 bg-[#2d5016] text-white rounded-lg hover:bg-[#3d6820] transition-colors flex items-center justify-center gap-2"
              >
                <Send size={20} />
                Submit Inquiry
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div>
            <div className="mb-8">
              <h3 className="text-2xl mb-6 text-[#2d5016]">Get in Touch</h3>
              <p className="text-gray-700 mb-6">
                We're here to assist you with all your rice procurement needs. Whether you're a trader, 
                exporter, or bulk buyer, our team is ready to provide you with the best quality rice 
                and exceptional service.
              </p>
            </div>

            {/* Contact Details */}
            <div className="space-y-6 mb-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#c5a655] rounded-lg flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="mb-1 text-[#2d5016]">Phone</h4>
                  <p className="text-gray-700">+92 348 7224647</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#c5a655] rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="mb-1 text-[#2d5016]">Email</h4>
                  <p className="text-gray-700">bashirsandhuricemill@gmail.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#c5a655] rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="mb-1 text-[#2d5016]">Location</h4>
                  <p className="text-gray-700">
                    Bashir Sandhu Rice Mill<br />
                    Main Link Road Qila Didar Singh<br />
                    Saharn Chattah, Ali Pur Chattah<br />
                    Gujranwala, Punjab, Pakistan
                  </p>
                </div>
              </div>
            </div>

            {/* Business Hours */}
            <div className="bg-gradient-to-br from-[#2d5016] to-[#3d6820] p-6 rounded-xl text-white">
              <h4 className="mb-4">Business Hours</h4>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span>Monday - Saturday</span>
                  <span>8:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday</span>
                  <span>Closed</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}