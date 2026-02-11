import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import EventDetails from './components/EventDetails';
import Methodology from './components/Methodology';
import Team from './components/Team';
import WhyAttend from './components/WhyAttend';
import Schedule from './components/Schedule';
import Registration from './components/Registration';
import Resources from './components/Resources';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-slate-900">
      <Navigation />
      <Hero />
      <About />
      <EventDetails />
      <Methodology />
      <Team />
      <WhyAttend />
      <Schedule />
      <Registration />
      <Resources />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
