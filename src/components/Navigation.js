import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faBook, faList } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-scroll";

class Navigation extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            navItems: [
                {
                    title: "Home",
                    id: "home",
                    icon: <FontAwesomeIcon icon={faHome} size="lg" />,
                },
                {
                    title: "About Me",
                    id: "about-me",
                    icon: <FontAwesomeIcon icon={faBook} size="lg" />,
                },
                {
                    title: "Projects",
                    id: "projects",
                    icon: <FontAwesomeIcon icon={faGithub} size="lg" />,
                },
                {
                    title: "CV",
                    id: "cv",
                    icon: <FontAwesomeIcon icon={faList} size="lg" />,
                },
            ],
        };
    }

    render() {
        return (
            <nav className="navigation">
                <ul className="nav-list">
                    {this.state.navItems.map((item, i) => (
                        <li key={i} className="nav-item">
                            <Link activeClass="active" to={item.id} spy={true} smooth={true} duration={500}>
                                {item.icon}
                                <span style={{ marginLeft: "0.5em" }}>{item.title}</span>
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>
        );
    }
}

export default Navigation;
