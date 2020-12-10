import React from "react";
import "../../App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faJs, faReact, faNode, faJava } from "@fortawesome/free-brands-svg-icons";
import { faDatabase, faMobile, faPencilRuler } from "@fortawesome/free-solid-svg-icons";

const Expertise = () => {
    return (
        <div className="fade-in">
            <h1>Expertise</h1>
            <table id="expertise-table">
                <tbody>
                    <tr>
                        <td>
                            <FontAwesomeIcon icon={faJs} size="3x" />
                        </td>
                        <td>
                            I have been working with vanilla Javascript for several years and possess a good knowledge
                            of its core features.
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <FontAwesomeIcon icon={faReact} size="3x" />
                        </td>
                        <td>React is my favorite and most-used front-end framework at the moment.</td>
                    </tr>
                    <tr>
                        <td>
                            <FontAwesomeIcon icon={faMobile} size="3x" />
                        </td>
                        <td>
                            Having studied React.js, it was a natural progression for me to get into mobile development
                            through React Native.
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <FontAwesomeIcon icon={faNode} size="3x" />
                        </td>
                        <td>Node with Express.js is the back-end solution that I am most familiar with.</td>
                    </tr>
                    <tr>
                        <td>
                            <FontAwesomeIcon icon={faDatabase} size="3x" />
                        </td>
                        <td>In my previous projects I have used MySQL, MongoDB and Firebase database solutions.</td>
                    </tr>
                    <tr>
                        <td>
                            <FontAwesomeIcon icon={faJava} size="3x" />
                        </td>
                        <td>Basic knowledge of Java. I haven't created any serious applications with it.</td>
                    </tr>
                    <tr>
                        <td>
                            <FontAwesomeIcon icon={faPencilRuler} size="3x" />
                        </td>
                        <td>
                            I am familiar with prototyping websites and applications. Previously I have mostly done it
                            with Adobe XD.
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default Expertise;
