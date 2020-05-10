import React from "react";
import "../../App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faJs, faReact, faNode, faJava } from "@fortawesome/free-brands-svg-icons";
import { faDatabase } from "@fortawesome/free-solid-svg-icons";

const Expertise = () => {
    return (
        <div className="fade-in">
            <h1>Expertise</h1>
            <table style={{ width: "80%", margin: "auto" }}>
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
                        <td>
                            After getting a good understanding of vanilla JS, I have gotten more into React. Front-end
                            in my most recent projects is build with React.
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <FontAwesomeIcon icon={faNode} size="3x" />
                        </td>
                        <td>
                            Node.js is my most used backend technology. Express.js and templating (EJS) are also part of
                            my expertise.
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <FontAwesomeIcon icon={faDatabase} size="3x" />
                        </td>
                        <td>In my previous projects I have used MySQL and MongoDB database solutions.</td>
                    </tr>
                    <tr>
                        <td>
                            <FontAwesomeIcon icon={faJava} size="3x" />
                        </td>
                        <td>Basic knowledge of Java. I haven't created any serious applications with it.</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default Expertise;
