import React from "react";
import "animate.css/animate.css";
import experience from "../../data/experience_data";

const Experience = () => {
    const exp = experience;

    return (
        <div className="fade-in">
            <h1>Experience</h1>
            <table id="experience-table">
                <tbody id="experience-table-body">
                    {exp.map((job) => (
                        <tr>
                            <td>{job.time}</td>
                            <td>{job.company}</td>
                            <td>{job.title}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Experience;
