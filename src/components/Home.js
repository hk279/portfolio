import React from "react";
import portrait from "../images/photo.jpg";

const Home = () => {
    return (
        <section className="home">
            <div className="content">
                <div className="intro">
                    <h1>Hi there,</h1>
                    <p>My name is Jere Järvinen and I am an aspiring fullstack developer from Espoo, Finland.</p>
                    <h3>Welcome to my portfolio!</h3>
                </div>
                <img className="portrait" src={portrait} alt="portrait"></img>
            </div>
        </section>
    );
};

export default Home;
