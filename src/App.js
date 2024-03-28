import logo from './logo.svg';
import './App.css';
import Nav from './components/Nav';
import Hero from './components/Hero';
import Logos from './components/Logos';
import ValueProp from './components/ValueProp';
import Howitworks from './components/Howitworks'
import { AccordionFx } from './components/Accordion';
import Footer from './components/Footer';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './components/Home';
import About from './components/About';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route index element={<Home/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
      </Routes>
          {/* <Nav/>
          <Hero/>
          <Logos/>
          <ValueProp/>
          <Howitworks/>
          <AccordionFx/>
          <Footer/> */}
      </BrowserRouter>
    </div>
  );
}

export default App;
