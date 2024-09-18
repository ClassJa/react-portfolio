import { Outlet } from 'react-router-dom';
import './index.css';

import MainTop from "./MainTop";
import HeaderTop from './components/HeaderTop';
import Footer from './components/Footer';


function App() {
  return (
    <>
    <HeaderTop />
    <main>
      <MainTop />
      <Outlet />
    </main>
    <Footer />
    </>

  )
}

export default App