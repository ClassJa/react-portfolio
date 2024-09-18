import Project from "./components/Projects"

function MainTop() {

    return (
        <aside>
            <ul>
                <li className='ul-no-bullet'>
                <a className="side-text" href="/about" > About Me </a>
                </li>
                <li className='ul-no-bullet'>
                <a className="side-text" href="/projects"> Portfolio </a>
                </li>
                <li className='ul-no-bullet'>
                <a className="side-text" href="/contact"> Contact Me </a>
                </li>
                <li className='ul-no-bullet'>
                <a className="side-text" href="/resume"> Resume </a>
                </li>
            </ul>
            </aside>

    
)}

export default MainTop