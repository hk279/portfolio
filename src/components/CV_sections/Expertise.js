import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faJs, faReact, faNode, faVuejs } from "@fortawesome/free-brands-svg-icons";
import { faDatabase, faMobile, faPencilRuler } from "@fortawesome/free-solid-svg-icons";

const Expertise = () => {
    return (
        <div className="fade-in">
            <h1>Expertise</h1>
            <table id="expertise-table">
                <tbody>
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
                        <td>
                            In my previous personal projects I have used mostly MongoDB and Firebase database solutions.
                            MySQL is familiar to me through my internship.
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <FontAwesomeIcon icon={faVuejs} size="3x" />
                        </td>
                        <td>
                            I have worked on improvements and fixes for a Vue.js app in my internship. I have a decent
                            grasp of the basic features of Vue.
                        </td>
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
                    <tr>
                        <td></td>
                        <td>I have worked with .NET framework and even some classic ASP during my internship.</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default Expertise;
