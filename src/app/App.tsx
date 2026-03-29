import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Products } from './components/Products';
import { ProcessingSteps } from './components/ProcessingSteps';
import { FarmerPartnership } from './components/FarmerPartnership';
import { WhyChooseUs } from './components/WhyChooseUs';
import { Gallery } from './components/Gallery';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <About />
        <Products />
        <ProcessingSteps />
        <FarmerPartnership />
        <WhyChooseUs />
        <Gallery />
      </main>
      <Footer />
    </div>
  );
}
