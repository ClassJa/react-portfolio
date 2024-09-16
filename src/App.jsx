import { Outlet } from 'react-router-dom';
import './index.css';

import MainTop from "./MainTop";
import HeaderTop from './components/HeaderTop';
import Footer from './components/Footer';


function App() {
  return (
    <div>
    <HeaderTop />
    <main>
      <MainTop />
      <Outlet />
    </main>
    <Footer />
    </div>

  )
}

export default App