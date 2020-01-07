import React from 'react'
import '../../App.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faJs, faReact, faPhp, faJava } from '@fortawesome/free-brands-svg-icons'

const Expertise = () => {
    return(
        <div className="fade-in">
            <h1>Expertise</h1>
            <table style={{width: "80%", margin: "auto"}}>
                <tbody>
                    <tr>
                        <td><FontAwesomeIcon icon={faJs} size="3x" /></td>
                        <td>My strongest area of expertise is JavaScript and most of my projects are made with it.</td>
                    </tr>
                    <tr>
                        <td><FontAwesomeIcon icon={faReact} size="3x" /></td>
                        <td>After getting a good understanding of vanilla JS, I have gotten more into React. This website is also made with React.</td>
                    </tr>
                    <tr>
                        <td><FontAwesomeIcon icon={faPhp} size="3x" /></td>
                        <td>I haven't worked with PHP as much as JS, but one of my portfolio projects (Quiz App) is made with it.</td>
                    </tr>
                    <tr>
                        <td><FontAwesomeIcon icon={faJava} size="3x" /></td>
                        <td>Basic knowledge of Java. I haven't created any serious applications with it.</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default Expertise