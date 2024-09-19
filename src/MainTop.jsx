import Project from "./components/Projects"

function MainTop() {

    return (
        <aside>
            <ul>
                <li className='ul-no-bullet'>
                <a className="side-text active" href="/about" > About Me </a>
                </li>
                <li className='ul-no-bullet'>
                <a className="side-text active" href="/projects"> Portfolio </a>
                </li>
                <li className='ul-no-bullet'>
                <a className="side-text active cont-side" href="/contact"> Contact Me </a>
                </li>
                <li className='ul-no-bullet'>
                <a className="side-text active" href="/resume"> Resume </a>
                </li>
            </ul>
            </aside>

    
)}

export default MainTop