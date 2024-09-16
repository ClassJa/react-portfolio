import { Outlet } from 'react-router-dom';
import './index.css';

import MainTop from "./MainTop";
import HeaderTop from './components/HeaderTop';


function App() {
  return (
    <div>
    <HeaderTop />
    <main>
      <MainTop />
      <Outlet />
    
    </main>
    </div>

  )
}

export default App