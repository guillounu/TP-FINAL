import { Routes, Route } from 'react-router-dom';
import Layout from './Components/Layout';
import Home from './pages/home';
import Tours from './pages/Tours';

 function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
       <Route path="/Giras" element={<Tours />} />
      </Route>

    </Routes>
  );
}


export default App
