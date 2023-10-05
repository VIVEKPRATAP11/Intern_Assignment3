import './App.css';
import About from './components/About';
import Discounts from './components/Discounts';
import Footer from './components/Footer';
import Header from './components/Home/Header';
import Home from './components/Home/Home';
import Membership from './components/Membership';
import Pricing from './components/Pricing';
import Schedules from './components/Schedules';
import Testimonials from './components/Testimonials';

function App() {
  return (
    <>
      <Header />
      <section id='home'>
        <Home />
      </section>
      <section id='about'>
        <About />
      </section>
      <section id='schedules'>
        <Schedules />
      </section>
      <section id='membership'>
        <Membership />
      </section>
      <section id='pricing'>
        <Pricing />
      </section>
      <Testimonials />
      <Discounts />
      <Footer />
    </>
  );
}

export default App;
