import React from "react";
import "../App.css";
import ProjectCard from "./ProjectCard";
import quizApp from "../images/quiz_app.PNG";
import videoGameSales from "../images/video_game_sales.PNG";
import finnkinoSearch from "../images/finnkino_search.PNG";
import mealRecipes from "../images/meal_recipes.png";
import movieSearchLogin from "../images/movies_search_login.png";

class Projects extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            projectCards: [
                {
                    title: "Movie Info",
                    description:
                        "A Node + EJS web app to demonstrate a login system with session control and making queries to a MongoDB database.",
                    image: movieSearchLogin,
                    sourceUrl: "https://github.com/hk279/Mongo-Node-Excercise-Movies-",
                    siteUrl: "https://node-mongo-movies.herokuapp.com/",
                },
                {
                    title: "Videogame Sales CRUD app",
                    description:
                        "A full-stack app using a MongoDB-database and Node.js / Express.js server with an API. Front-end is made built with React using Shards UI toolkit.",
                    image: videoGameSales,
                    sourceUrl: "https://github.com/hk279/Project-3-Frontend",
                    siteUrl: "https://node-mongo-games-frontend.herokuapp.com/",
                },
                {
                    title: "Meal Recipes",
                    description:
                        "A React application that allows the user to browse and search for recipes in the Meal DB -API. UI created with React Bootstrap.",
                    image: mealRecipes,
                    sourceUrl: "https://github.com/hk279/MealRecipes",
                    siteUrl: "https://meal-recipes-app.herokuapp.com/",
                },
                {
                    title: "Finnkino Lite Search",
                    description: "Light search utility for movies in Finnkino theatres.",
                    image: finnkinoSearch,
                    sourceUrl: "https://github.com/hk279/movies_webapp",
                    siteUrl: "",
                },
                {
                    title: "Quiz App",
                    description: `A PHP web app for teachers to create quizzes and small exams. 
                        Separate admin and student logins to manage or answer quizzes respectively. 
                        Connected to a MySQL database.`,
                    image: quizApp,
                    sourceUrl: "https://github.com/hk279/quiz_app",
                    siteUrl: "",
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
                            sourceUrl={item.sourceUrl}
                            siteUrl={item.siteUrl}
                        />
                    ))}
                </div>
            </section>
        );
    }
}

export default Projects;
