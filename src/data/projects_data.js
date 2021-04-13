import quizApp from "../images/quiz_app.PNG";
import videoGameSales from "../images/video_game_sales.PNG";
import mealRecipes from "../images/meal_recipes.png";
import movieSearchLogin from "../images/movies_search_login.png";
import warehouseAssistant from "../images/warehouse_assistant.PNG";
import reactNative from "../images/react-native.jpeg";

const projects = [
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
            "A full-stack app using a MongoDB-database and Node.js / Express.js server with an API. Front-end is built with React using Shards UI toolkit.",
        image: videoGameSales,
        sourceUrl: "https://github.com/hk279/Project-3-Frontend",
        siteUrl: "https://node-mongo-games-frontend.herokuapp.com/",
    },
    {
        title: "Warehouse Assistant",
        description:
            "A Full-stack app made as an assignment for a software company job application. Back-end parses and serves data from intentionally poor APIs with built in errors to replicate a real-life legacy API. UI created with AntDesign.",
        image: warehouseAssistant,
        sourceUrl: "https://github.com/hk279/Reaktor-assignment-2020",
        siteUrl: "http://reaktor-task.herokuapp.com/",
    },
    {
        title: "Meal Recipes",
        description:
            "A React application that allows the user to browse and search for recipes in the Meal DB -API. UI created with React Bootstrap.",
        image: mealRecipes,
        sourceUrl: "https://github.com/hk279/MealRecipes",
        siteUrl: "",
    },
    {
        title: "React Native Apps",
        description:
            "A few examples of React Native applications can be found in my GitHub. These are regular React Native apps, but I have done others with Expo as well.",
        image: reactNative,
        sourceUrl: "https://github.com/hk279/",
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
];

export default projects;
