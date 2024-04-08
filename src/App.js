import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './components/Home';
import About from './components/About';
import {useEffect} from 'react'

function App() {
  useEffect(() => {
    document.title = 'Pulse PR';
  }, []);
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route index element={<Home/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
