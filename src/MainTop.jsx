import Project from "./components/Projects"

function MainTop() {

    return (
    <div id="mainSection">
        <aside>
            <ul>
                <li className='ul-no-bullet'>
                <a className="side-text" href="/about" > About Me </a>
                </li>
                <li className='ul-no-bullet'>
                <a className="side-text" href="/projects"> Projects </a>
                </li>
                <li className='ul-no-bullet'>
                <a className="side-text" href="/contact"> Contact Me </a>
                </li>
                <li className='ul-no-bullet'>
                <a className="side-text" href="/resume"> Resume </a>
                </li>
            </ul>
            </aside>
        <section className="projSec">
            <Project />
        </section>
    </div>
    
)}

export default MainTop