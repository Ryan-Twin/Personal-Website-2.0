import './Landing.css'
import {NavLink} from "react-router-dom";

function Landing (props) {
    return <section className="content">
        <div className="personal-photo-container pr-10">
            <img src="images/Ryan-Towle-Small.png" className="personal-photo" alt="Index Main"/>
        </div>

        <div className="main-text-container">
            <h1>Hi, I'm Ryan Towle. Nice to meet you.</h1>
            <br/>
            <p>I'm a senior graduating this spring at Virginia Tech, majoring in Computer Science with minors in
                Human-Computer Interaction and Japanese Studies.
                During my spare time, I'm a huge fan of competitive gaming—I enjoy healthy competition and strive to
                always
                be improving.</p>
            <p>For now, feel free to take a look at my <NavLink to={'/portfolio'}>portfolio</NavLink>, check out my <NavLink
                to={'/contact'}>contact info</NavLink>, or connect with me below.</p>
            <nav className="socials">
                <a href="https://www.linkedin.com/in/ryan-towle" target="_blank">
                    <img className="btn btn-lg social-logo" alt="LinkedIn" src="images/LinkedIn-Logo.png"/>
                </a>
                <a href="https://app.joinhandshake.com/users/10970495" target="_blank">
                    <img className="btn btn-lg social-logo" alt="Handshake" src="images/Handshake-Logo.png"/>
                </a>
                <a href="https://www.facebook.com/towleryan/" target="_blank">
                    <img className="btn btn-lg social-logo" alt="Facebook" src="images/Facebook-Logo.png"/>
                </a>
            </nav>
        </div>
    </section>
}

export default Landing
