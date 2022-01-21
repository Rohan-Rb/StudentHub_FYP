import './App.css';
import Navbar from './components/navBar/navIndex';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from './components/About/About';
import Footer from './components/Footer/footer';
import Contact from './components/ContactUs/Contact';
import NotFoundView from './components/Error/Error404';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/about' element={<About />} />
        <Route path='/contactus' element={<Contact />} />
        <Route path='*' element={<NotFoundView />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
