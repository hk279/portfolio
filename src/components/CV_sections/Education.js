import React from "react";

const Education = () => {
    return (
        <div className="fade-in">
            <h1>Education</h1>
            {/* <ul className="education-list">
                <li>Laurea University of Applied Sciences<br/>Business IT<br/>2018-</li>
                <li>Lahti University of Applied Sciences<br/>Business/Marketing major<br/>2013-2017</li>
                <li>High School - Heinolan lukio<br/>Graduation 2013</li>
            </ul> */}
            <table>
                <tbody id="education-table-body">
                    <tr>
                        <td>2018-</td>
                        <td>Laurea University of Applied Sciences</td>
                        <td>Business IT</td>
                    </tr>
                    <tr>
                        <td>Graduation 2017</td>
                        <td>Lahti University of Applied Sciences</td>
                        <td>Business/Marketing major</td>
                    </tr>
                    <tr>
                        <td>Graduation 2013</td>
                        <td>Heinolan lukio</td>
                        <td>High School</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default Education;
