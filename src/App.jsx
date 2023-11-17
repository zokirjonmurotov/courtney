import './App.css';
import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import Home from './pages/Home/Home';
import Services from './pages/Services/Services';
import Header from './components/Layout/Header';
import Footer from './components/Layout/Footer';
import StartPage from './pages/StartPage/StartPage';
import Technologies from './pages/Technologies/Technologies';
import Careers from './pages/Career/Careers';
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="services" element={<Services />} />
          <Route path="start" element={<StartPage />} />
          <Route path="technologies" element={<Technologies />} />
          <Route path="careers" element={<Careers />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
