import { Outlet } from 'react-router-dom';
import './index.css';

import MainTop from "./MainTop";
import HeaderTop from './components/HeaderTop';


function App() {
  return (
    <main>
      <HeaderTop />
      <MainTop />
      <Outlet />
    
    </main>
  )
}

export default App