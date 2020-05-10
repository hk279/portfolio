import React from "react";
import "../App.css";
import ProjectCard from "./ProjectCard";
import quizApp from "../images/quiz_app.PNG";
import videoGameSales from "../images/video_game_sales.PNG";
import finnkinoSearch from "../images/finnkino_search.PNG";
import mealRecipes from "../images/meal_recipes.png";

class Projects extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            projectCards: [
                {
                    title: "Videogame Sales CRUD app",
                    description:
                        "A full-stack app using a Node.js / Express.js server with an API. Front-end is made built with React using Shards UI toolkit.",
                    image: videoGameSales,
                    url: "https://github.com/hk279/Project-3-Frontend",
                },
                {
                    title: "Meal Recipes",
                    description:
                        "A React application that allows the user to browse and search for recipes in the Meal DB -API. UI created with React Bootstrap.",
                    image: mealRecipes,
                    url: "https://github.com/hk279/MealRecipes",
                },
                {
                    title: "Finnkino Lite Search",
                    description: "Light search utility for movies in Finnkino theatres.",
                    image: finnkinoSearch,
                    url: "https://github.com/hk279/movies_webapp",
                },
                {
                    title: "Quiz App",
                    description: `A PHP web app for teachers to create quizzes and small exams. 
                        Separate admin and student logins to manage or answer quizzes respectively. 
                        Connected to a MySQL database.`,
                    image: quizApp,
                    url: "https://github.com/hk279/quiz_app",
                },
            ],
        };
    }
    render() {
        return (
            <section className="projects background">
                <div className="content">
                    <h2>Projects</h2>
                    {this.state.projectCards.map((item) => (
                        <ProjectCard
                            key={item.title}
                            title={item.title}
                            description={item.description}
                            image={item.image}
                            url={item.url}
                        />
                    ))}
                </div>
            </section>
        );
    }
}

export default Projects;
