
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Projects from './components/Projects';
import Regulations from './components/Regulations';
import Resources from './components/Resources';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import ChatWidget from './components/ChatWidget';

// Import generated hero background (we'll ensure the file exists at this path)
import heroBg from './assets/hero_background.png';

function App() {
  return (
    <div className="font-body antialiased text-anthropic-black bg-cream min-h-screen selection:bg-anthropic-black selection:text-cream">
      <Navbar />
      <Hero bgImage={heroBg} />
      <Services />
      <About />
      <Projects />
      <Regulations />
      <Resources />
      <ContactForm />
      <Footer />
      <ChatWidget />
    </div>
  );
}

export default App;
