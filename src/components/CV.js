import React from "react";
import "../App.css";
import Contact from "./CV_sections/Contact";
import Experience from "./CV_sections/Experience";
import Education from "./CV_sections/Education";
import Expertise from "./CV_sections/Expertise";

class CV extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showTab: "contact",
            tabSelected: {
                contact: "selected",
                experience: "",
                education: "",
                expertise: "",
            },
        };
        this.selectTab = this.selectTab.bind(this);
    }

    selectTab(event) {
        var tabName = event.target.id;
        this.setState({
            showTab: tabName,
            tabSelected: {
                contact: "",
                experience: "",
                education: "",
                expertise: "",
                [tabName]: "selected",
            },
        });
    }

    render() {
        var tabContent;
        switch (this.state.showTab) {
            case "contact":
                tabContent = <Contact />;
                break;
            case "experience":
                tabContent = <Experience />;
                break;
            case "education":
                tabContent = <Education />;
                break;
            case "expertise":
                tabContent = <Expertise />;
                break;
            default:
                break;
        }
        return (
            <section className="cv">
                <div className="content">
                    <h2>CV</h2>
                    <div className="btn-group">
                        <button
                            id="contact"
                            className={this.state.tabSelected.contact}
                            onClick={(event) => {
                                this.selectTab(event);
                            }}
                        >
                            Contact
                        </button>
                        <button
                            id="experience"
                            className={this.state.tabSelected.experience}
                            onClick={(event) => {
                                this.selectTab(event);
                            }}
                        >
                            Experience
                        </button>
                        <button
                            id="education"
                            className={this.state.tabSelected.education}
                            onClick={(event) => {
                                this.selectTab(event);
                            }}
                        >
                            Education
                        </button>
                        <button
                            id="expertise"
                            className={this.state.tabSelected.expertise}
                            onClick={(event) => {
                                this.selectTab(event);
                            }}
                        >
                            Expertise
                        </button>
                    </div>
                    <div>{tabContent}</div>
                </div>
            </section>
        );
    }
}

export default CV;
