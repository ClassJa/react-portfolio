import About from './About'


function Navigation() {

return (
<aside>
    <ul>
        <li className='ul-no-bullet'>
        <a className="side-text" href="#AboutMe" > About Me </a>
        </li>
        <li className='ul-no-bullet'>
        <a className="side-text" href="#Projects"> Projects </a>
        </li>
        <li className='ul-no-bullet'>
        <a className="side-text" href="#ContactMe"> Contact Me </a>
        </li>
        <li className='ul-no-bullet'>
        <a className="side-text" href="#Resume"> Resume </a>
        </li>
    </ul>
</aside>

)}

export default Navigation

// <ul style={{height: '100vh'}} className="testing" >