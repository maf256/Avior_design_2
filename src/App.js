import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home'
import Header from './components/Header'
import Followline from './components/Followline'


function App() {
  return (
    <BrowserRouter>
      <Header />
      <Followline />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<Header />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
