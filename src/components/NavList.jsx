import { useState } from "react";

function NavList() {
const [input, setInput] = useState('')

const handleChange = (e) => {
    setInput(e.target.value);
  };


<aside>
    <ul>
        <li className='ul-no-bullet'>
        <a onClick={handleChange}> About Me </a>
        </li>
        <li className='ul-no-bullet'>
        <a onClick={handleChange}> Portfolio </a>
        </li>
        <li className='ul-no-bullet'>
        <a onClick={handleChange}> Contact Me </a>
        </li>
    </ul>
    </aside>
}

export default NavList