import React from 'react'
import '../App.css'
import ProjectCard from './ProjectCard'
import quizApp from '../images/quiz_app.PNG'
import todoList from '../images/todo_list.png'
import finnkinoSearch from '../images/finnkino_search.PNG'
import mealRecipes from '../images/meal_recipes.png'

class Projects extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            projectCards: [
                {
                    title: "Finnkino Lite Search",
                    description: "Light search utility for movies in Finnkino theatres.",
                    image: finnkinoSearch,
                    url: "https://github.com/hk279/movies_webapp"
                },
                {
                    title: "Quiz App",
                    description: "PHP web app for teachers to create quizzes for students. Connected to a MySQL database.",
                    image: quizApp,
                    url: "https://github.com/hk279/quiz_app"
                },
                {
                    title: "Todo List",
                    description: "A web app for saving items containing a title, a type, a description and a due date. Uses local storage.",
                    image: todoList,
                    url: "https://github.com/hk279/todo_list_app"
                },
                {
                    title: "Meal Recipes",
                    description: "A React application that allows the user to browse and search for recipes in the Meal DB -API.",
                    image: mealRecipes,
                    url: "https://github.com/hk279/MealRecipes"
                }
            ]
        }
    }
    render() {
        return(
            <section className="projects background">
                <div className="content">
                    <h2>Projects</h2>
                    {this.state.projectCards.map((item, i) => 
                        <ProjectCard key={item.title} title={item.title} description={item.description} image={item.image} url={item.url}/>
                    )}
                </div>
            </section>
        )
    }
}

export default Projects