import Navbar from '../components/Navbar';
import HomePage from '../components/HomePage';
import Footer from '../components/Footer';
import { OrganizationJsonLd } from './jsonld';

export default function Page() {
  return (
    <div className="bg-ink min-h-screen font-sans selection:bg-bronze/30 selection:text-white">
      <OrganizationJsonLd />
      <Navbar />
      <HomePage />
      <Footer />
    </div>
  );
}
