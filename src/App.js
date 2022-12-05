
import './App.css';
import Layout from './layout/Layout';
import { Route, Routes } from "react-router-dom";
import Welcome from './pages/Welcome/Welcome';
import About from './pages/About/About';
import Experience from './pages/Experience/Experience';
import Service from './pages/Services/Service';
import Portfolio from './pages/Portfolio/Portfolio';
function App() {
  return (
   <Layout>
    <Routes>
        <Route path="/" element={<Welcome/>}></Route>
        <Route path="/about" element={<About/>}></Route>
        <Route path="/experience" element={<Experience/>}></Route>
        <Route path="/services" element={<Service/>}></Route>
        <Route path="/portfolio" element={<Portfolio/>}></Route>
      </Routes>
   </Layout>
  );
}

export default App;
