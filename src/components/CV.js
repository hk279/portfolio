import React from 'react'
import '../App.css'
import Contact from "./CV_sections/Contact";
import Education from "./CV_sections/Education";
import Experience from "./CV_sections/Experience";
import Expertise from "./CV_sections/Expertise";

class CV extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            showTab: "contact"
        }
        this.selectTab = this.selectTab.bind(this);
    }

    selectTab(tabName) {
        this.setState({showTab: tabName})
    }

    render() {
        var tabContent;
        switch (this.state.showTab) {
            case "contact":
                tabContent = <Contact />
                break;
            case "experience":
                tabContent = <Experience />
                break;
            case "education":
                tabContent = <Education />
                break;
            case "expertise":
                tabContent = <Expertise />
                break;
            default:
                break;
        }
        return(
            <section className="cv background">
                <div className="content">
                    <h2>CV</h2>
                    <div className="btn-group">
                        <button onClick={() => {this.selectTab("contact")}}>
                            Contact
                        </button>
                        <button onClick={() => {this.selectTab("experience")}}>
                            Experience
                        </button>
                        <button onClick={(event) => {this.selectTab("education")}}>
                            Education
                        </button>
                        <button onClick={(event) => {this.selectTab("expertise")}}>
                            Expertise
                        </button>
                    </div>
                    <div>
                        {tabContent}
                    </div>
                </div>
            </section>
        )
    }
}

export default CV