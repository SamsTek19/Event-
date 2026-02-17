import Navigation from '../components/Navigation';
import Hero from '../components/Hero';
import About from '../components/About';
import EventDetails from '../components/EventDetails';
import Methodology from '../components/Methodology';
import WhyAttend from '../components/WhyAttend';
import Schedule from '../components/Schedule';
import Resources from '../components/Resources';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-slate-900">
      <Navigation />
      <Hero />
      <About />
      <EventDetails />
      <Methodology />
      <WhyAttend />
      <Schedule />
      <Resources />
      <Contact />
      <Footer />
    </div>
  );
}


