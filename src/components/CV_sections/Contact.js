import React from 'react'
import '../../App.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'

const Contact = () => {
    return(
        <div className="fade-in">
            <h1>Contact Info</h1>
            <p>Feel free to contact me by email for my full detailed resume and contact information.</p>
            <a id="email-link" href="mailto:jerejarvinen94@gmail.com?">jerejarvinen94@gmail.com</a><br/>
            <div style={{cursor: "pointer", display: "inline-block"}} onClick={() => window.location.href='https://www.linkedin.com/in/jere-j%C3%A4rvinen-b0b64b89/'}>
                <FontAwesomeIcon icon={faLinkedin} size="5x" />
            </div>
        </div>
    )
}

export default Contact