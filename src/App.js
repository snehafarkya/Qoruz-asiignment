import './App.css';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import About from './components/About';
import Reason from './components/Reason';
import Power from './components/Power';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <div className="headed">
      <Hero/>
      <About/>
      <Reason/>
      <Power/>
      <Contact/>
      </div>
      <Footer/>

    </div>
  );
}

export default App;
