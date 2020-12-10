import React from "react";

const MyStory = () => {
    return (
        <section className="about-me">
            <div className="content">
                <h3 style={{ textAlign: "center" }}>About Me</h3>
                <div className="text-block">
                    <p>
                        My story as a developer stated after I graduated as a BBA. For a while, I worked in B2B-sales
                        for a software company and my time there inspired me to start pursuing a career in the
                        development side of things.
                    </p>
                    <p>
                        I moved to Espoo in order to study business IT and now I feel like I've found my calling. I
                        enjoy the ever-changing nature of the field and especially the feeling of solving problems and
                        making things work.
                    </p>
                    <p>
                        At this point I'm looking for opportunities to start applying my skills in a real working-life
                        environment.
                    </p>
                </div>
                <hr />
                <div className="text-block">
                    <p>
                        My free time is often spent playing the guitar, golfing, disc golfing, PC gaming or playing
                        billiards among many other activities.
                    </p>
                    <p>
                        I'm always on the lookout for new hobbies, travel destinations and insightful documentaries so
                        feel free to suggest!
                    </p>
                </div>
            </div>
        </section>
    );
};

export default MyStory;
