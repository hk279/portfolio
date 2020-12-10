import React from "react";
import "../App.css";
import "animate.css/animate.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faHome, faBook, faList } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-scroll";

class Menu extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            opened: false,
            menuItems: [
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
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        if (!this.state.opened) {
            document.getElementById("menu-icon").classList.remove("animation-rotate-2");
            document.getElementById("menu-icon").classList.add("animation-rotate-1");
        } else {
            document.getElementById("menu-icon").classList.remove("animation-rotate-1");
            document.getElementById("menu-icon").classList.add("animation-rotate-2");
        }
        var boo = this.state.opened;
        this.setState({ opened: !boo });
    }

    render() {
        if (this.state.opened) {
            return (
                <div className="menu fade-in">
                    <div className="menu-button" onClick={this.handleClick}>
                        <div id="menu-icon">
                            <FontAwesomeIcon className="menu-icon" icon={faBars} size="lg" />
                        </div>
                    </div>
                    <ul className="menu-list">
                        {this.state.menuItems.map((item, i) => (
                            <li key={i} className="menu-item">
                                <Link activeClass="active" to={item.id} spy={true} smooth={true} duration={500}>
                                    {item.icon}
                                    <span style={{ marginLeft: "0.5em" }}>{item.title}</span>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            );
        } else {
            return (
                <div className="menu">
                    <div className="menu-button" onClick={this.handleClick}>
                        <div id="menu-icon">
                            <FontAwesomeIcon icon={faBars} size="lg" />
                        </div>
                    </div>
                </div>
            );
        }
    }
}

export default Menu;
