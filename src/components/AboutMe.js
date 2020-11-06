import React from "react";
import "../App.css";

const MyStory = () => {
    return (
        <section className="about-me">
            <div className="content" style={{ textAlign: "left" }}>
                <h3>About Me</h3>
                <p>
                    My story as a developer stated after I graduated as a BBA. For a while, I worked in B2B-sales for a
                    software company and my time there inspired me to start pursuing a career in the development side of
                    things.
                </p>
                <p>
                    I moved to Espoo in order to study business IT and now I feel like I've found my calling. I enjoy
                    the ever-changing nature of the field and especially the feeling of solving problems and making
                    things work.
                </p>
                <p>
                    At this point I'm looking for opportunities to start applying my skills in a real working-life
                    environment.
                </p>
            </div>
        </section>
    );
};

export default MyStory;
