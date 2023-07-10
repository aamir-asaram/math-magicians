import './App.css';
import Calculator from './components/Calculator';
import Quote from './components/Quote';
import Navigation from './components/Navigation';
import { Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <Navigation />
      <main>
        <Routes>
          {/* <Route path="/" element={<Home />} /> */}
          <Route path="/calculator" element={<Calculator />} />
          <Route path="/quote" element={<Quote />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
