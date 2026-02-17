import Navigation from '../components/Navigation';
import EventDetails from '../components/EventDetails';
import Footer from '../components/Footer';

export default function EventDetailsPage() {
  return (
    <div className="min-h-screen bg-slate-900">
      <Navigation />
      <EventDetails />
      <Footer />
    </div>
  );
}


