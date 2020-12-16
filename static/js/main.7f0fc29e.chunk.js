(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{26:function(e,t,a){e.exports=a.p+"static/media/photo.ad965bb5.jpg"},27:function(e,t,a){e.exports=a.p+"static/media/quiz_app.7cfa3619.PNG"},28:function(e,t,a){e.exports=a.p+"static/media/video_game_sales.3347844a.PNG"},29:function(e,t,a){e.exports=a.p+"static/media/meal_recipes.be9510dd.png"},30:function(e,t,a){e.exports=a.p+"static/media/movies_search_login.ca1bab25.png"},31:function(e,t,a){e.exports=a.p+"static/media/warehouse_assistant.1f76f416.PNG"},32:function(e,t,a){e.exports=a.p+"static/media/react-native.7c5a6642.jpeg"},34:function(e,t,a){e.exports=a(53)},39:function(e,t,a){},40:function(e,t,a){},53:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),l=a(14),c=a.n(l),r=(a(39),a(5)),o=a(6),s=a(8),m=a(7),u=a(9),d=(a(40),a(2)),p=a(3),E=a(4),h=a(15),b=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(s.a)(this,Object(m.a)(t).call(this,e))).state={navItems:[{title:"Home",id:"home",icon:i.a.createElement(d.a,{icon:p.e,size:"lg"})},{title:"About Me",id:"about-me",icon:i.a.createElement(d.a,{icon:p.b,size:"lg"})},{title:"Projects",id:"projects",icon:i.a.createElement(d.a,{icon:E.a,size:"lg"})},{title:"CV",id:"cv",icon:i.a.createElement(d.a,{icon:p.f,size:"lg"})}]},a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return i.a.createElement("nav",{className:"navigation"},i.a.createElement("ul",{className:"nav-list"},this.state.navItems.map((function(e,t){return i.a.createElement("li",{key:t,className:"nav-item"},i.a.createElement(h.Link,{activeClass:"active",to:e.id,spy:!0,smooth:!0,duration:500},e.icon,i.a.createElement("span",{style:{marginLeft:"0.5em"}},e.title)))}))))}}]),t}(i.a.Component),f=a(26),g=a.n(f),v=function(){return i.a.createElement("section",{className:"home"},i.a.createElement("div",{className:"content"},i.a.createElement("div",{className:"intro"},i.a.createElement("h1",null,"Hi there,"),i.a.createElement("p",null,"My name is Jere J\xe4rvinen and I am an aspiring fullstack developer from Espoo, Finland."),i.a.createElement("h3",null,"Welcome to my portfolio!")),i.a.createElement("img",{className:"portrait",src:g.a,alt:"portrait"})))},y=function(){return i.a.createElement("section",{className:"about-me"},i.a.createElement("div",{className:"content"},i.a.createElement("h3",{style:{textAlign:"center"}},"About Me"),i.a.createElement("div",{className:"text-block"},i.a.createElement("p",null,"My story as a developer stated after I graduated as a BBA. For a while, I worked in B2B-sales for a software company and my time there inspired me to start pursuing a career in the development side of things."),i.a.createElement("p",null,"I moved to Espoo in order to study business IT and now I feel like I've found my calling. I enjoy the ever-changing nature of the field and especially the feeling of solving problems and making things work."),i.a.createElement("p",null,"At this point I'm looking for opportunities to start applying my skills in a real working-life environment.")),i.a.createElement("hr",null),i.a.createElement("div",{className:"text-block"},i.a.createElement("p",null,"My free time is often spent playing the guitar, golfing, disc golfing, PC gaming or playing billiards among many other activities."),i.a.createElement("p",null,"I'm always on the lookout for new hobbies, travel destinations and insightful documentaries so feel free to suggest!"))))},k=function(e){if(""!==e.siteUrl)var t=i.a.createElement("form",{action:e.siteUrl,method:"get",target:"_blank"},i.a.createElement("button",{type:"submit",className:"project-button"},"View Website"));return i.a.createElement("div",{className:"project-container"},i.a.createElement("img",{className:"project-img",src:e.image,alt:"thumbnail"}),i.a.createElement("div",{className:"project-content"},i.a.createElement("h3",{className:"project-title"},e.title),i.a.createElement("p",{className:"project-desc"},e.description),i.a.createElement("form",{action:e.sourceUrl,method:"get",target:"_blank"},i.a.createElement("button",{type:"submit",className:"project-button"},"View Source")),t))},w=a(27),j=a.n(w),N=a(28),x=a.n(N),I=a(29),C=a.n(I),O=a(30),z=a.n(O),A=a(31),U=a.n(A),B=a(32),M=a.n(B),S=[{title:"Movie Info",description:"A Node + EJS web app to demonstrate a login system with session control and making queries to a MongoDB database.",image:z.a,sourceUrl:"https://github.com/hk279/Mongo-Node-Excercise-Movies-",siteUrl:"https://node-mongo-movies.herokuapp.com/"},{title:"Videogame Sales CRUD app",description:"A full-stack app using a MongoDB-database and Node.js / Express.js server with an API. Front-end is built with React using Shards UI toolkit.",image:x.a,sourceUrl:"https://github.com/hk279/Project-3-Frontend",siteUrl:"https://node-mongo-games-frontend.herokuapp.com/"},{title:"Warehouse Assistant",description:"A React app made as an assignment for a software company job application. Fetches data from API's with poor data structure and built in errors to replicate a real-life legacy API. UI created with AntDesign.",image:U.a,sourceUrl:"https://github.com/hk279/Reaktor-assignment-2020",siteUrl:"http://reaktor-task.herokuapp.com/"},{title:"Meal Recipes",description:"A React application that allows the user to browse and search for recipes in the Meal DB -API. UI created with React Bootstrap.",image:C.a,sourceUrl:"https://github.com/hk279/MealRecipes",siteUrl:""},{title:"React Native Apps",description:"A few examples of React Native applications can be found in my GitHub. These are regular React Native apps, but I have done others with Expo as well.",image:M.a,sourceUrl:"https://github.com/hk279/",siteUrl:""},{title:"Quiz App",description:"A PHP web app for teachers to create quizzes and small exams. \n            Separate admin and student logins to manage or answer quizzes respectively. \n            Connected to a MySQL database.",image:j.a,sourceUrl:"https://github.com/hk279/quiz_app",siteUrl:""}],P=function(){var e=S;return i.a.createElement("section",{className:"projects"},i.a.createElement("div",{className:"content"},i.a.createElement("h2",null,"Projects"),e.map((function(e){return i.a.createElement(k,{key:e.title,title:e.title,description:e.description,image:e.image,sourceUrl:e.sourceUrl,siteUrl:e.siteUrl})}))))},T=a(33),L=a(10),R=function(){return i.a.createElement("div",{className:"fade-in"},i.a.createElement("h1",null,"Contact Info"),i.a.createElement("p",null,"Feel free to contact me by email for my full detailed resume and contact information."),i.a.createElement("br",null),i.a.createElement("div",{className:"contact-icon",onClick:function(){return window.location.href="mailto:jerejarvinen94@gmail.com"}},i.a.createElement(d.a,{icon:p.d,size:"5x"})),i.a.createElement("div",{className:"contact-icon",onClick:function(){return window.location.href="https://www.linkedin.com/in/jere-j%C3%A4rvinen-b0b64b89/"}},i.a.createElement(d.a,{icon:E.d,size:"5x"})))},H=(a(25),[{time:"4/2019 \u2013 Present",company:"L\xf6fkulla Golf",title:"Caddiemaster (seasonal)"},{time:"1/2016 \u2013 6/2018",company:"Meamart Oy / Lunni Oy",title:"B2B-sales and pre-sales"},{time:"07/2014 \u2013 8/2015",company:"Posti Group Oyj",title:"Mail delivery (seasonal)"},{time:"05/2013 \u2013 08/2013",company:"Caf\xe9 Paviljong Oy",title:"Cafe worker"},{time:"06/2012 - 07/2012",company:"City of Heinola",title:"Theatre worker"},{time:"06/2011 - 07/2011",company:"Liikenneasema & S-Market ABC Heinola",title:"Trainee"},{time:"06/2010 - 07/2010",company:"City of Heinola - Healthcare Services",title:"Trainee"}]),_=function(){var e=H;return i.a.createElement("div",{className:"fade-in"},i.a.createElement("h1",null,"Experience"),i.a.createElement("table",{id:"experience-table"},i.a.createElement("tbody",{id:"experience-table-body"},e.map((function(e){return i.a.createElement("tr",null,i.a.createElement("td",null,e.time),i.a.createElement("td",null,e.company),i.a.createElement("td",null,e.title))})))))},G=function(){return i.a.createElement("div",{className:"fade-in"},i.a.createElement("h1",null,"Education"),i.a.createElement("table",null,i.a.createElement("tbody",{id:"education-table-body"},i.a.createElement("tr",null,i.a.createElement("td",null,"2018-"),i.a.createElement("td",null,"Laurea University of Applied Sciences"),i.a.createElement("td",null,"Business IT")),i.a.createElement("tr",null,i.a.createElement("td",null,"Graduation 2017"),i.a.createElement("td",null,"Lahti University of Applied Sciences"),i.a.createElement("td",null,"Business/Marketing major")),i.a.createElement("tr",null,i.a.createElement("td",null,"Graduation 2013"),i.a.createElement("td",null,"Heinolan lukio"),i.a.createElement("td",null,"High School")))))},J=function(){return i.a.createElement("div",{className:"fade-in"},i.a.createElement("h1",null,"Expertise"),i.a.createElement("table",{id:"expertise-table"},i.a.createElement("tbody",null,i.a.createElement("tr",null,i.a.createElement("td",null,i.a.createElement(d.a,{icon:E.c,size:"3x"})),i.a.createElement("td",null,"I have been working with vanilla Javascript for several years and possess a good knowledge of its core features.")),i.a.createElement("tr",null,i.a.createElement("td",null,i.a.createElement(d.a,{icon:E.f,size:"3x"})),i.a.createElement("td",null,"React is my favorite and most-used front-end framework at the moment.")),i.a.createElement("tr",null,i.a.createElement("td",null,i.a.createElement(d.a,{icon:p.g,size:"3x"})),i.a.createElement("td",null,"Having studied React.js, it was a natural progression for me to get into mobile development through React Native.")),i.a.createElement("tr",null,i.a.createElement("td",null,i.a.createElement(d.a,{icon:E.e,size:"3x"})),i.a.createElement("td",null,"Node with Express.js is the back-end solution that I am most familiar with.")),i.a.createElement("tr",null,i.a.createElement("td",null,i.a.createElement(d.a,{icon:p.c,size:"3x"})),i.a.createElement("td",null,"In my previous projects I have used MySQL, MongoDB and Firebase database solutions.")),i.a.createElement("tr",null,i.a.createElement("td",null,i.a.createElement(d.a,{icon:E.b,size:"3x"})),i.a.createElement("td",null,"Basic knowledge of Java and Kotlin. Java was the first programming language that I was introduced to. I have been learning the basics of Android Studio with Kotlin.")),i.a.createElement("tr",null,i.a.createElement("td",null,i.a.createElement(d.a,{icon:p.h,size:"3x"})),i.a.createElement("td",null,"I am familiar with prototyping websites and applications. Previously I have mostly done it with Adobe XD.")))))},D=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(s.a)(this,Object(m.a)(t).call(this,e))).state={showTab:"contact",tabSelected:{contact:"selected",experience:"",education:"",expertise:""}},a.selectTab=a.selectTab.bind(Object(L.a)(a)),a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"selectTab",value:function(e){var t=e.target.id;this.setState({showTab:t,tabSelected:Object(T.a)({contact:"",experience:"",education:"",expertise:""},t,"selected")})}},{key:"render",value:function(){var e,t=this;switch(this.state.showTab){case"contact":e=i.a.createElement(R,null);break;case"experience":e=i.a.createElement(_,null);break;case"education":e=i.a.createElement(G,null);break;case"expertise":e=i.a.createElement(J,null)}return i.a.createElement("section",{className:"cv"},i.a.createElement("div",{className:"content"},i.a.createElement("h2",null,"CV"),i.a.createElement("div",{className:"btn-group"},i.a.createElement("button",{id:"contact",className:this.state.tabSelected.contact,onClick:function(e){t.selectTab(e)}},"Contact"),i.a.createElement("button",{id:"experience",className:this.state.tabSelected.experience,onClick:function(e){t.selectTab(e)}},"Experience"),i.a.createElement("button",{id:"education",className:this.state.tabSelected.education,onClick:function(e){t.selectTab(e)}},"Education"),i.a.createElement("button",{id:"expertise",className:this.state.tabSelected.expertise,onClick:function(e){t.selectTab(e)}},"Expertise")),i.a.createElement("div",null,e)))}}]),t}(i.a.Component),F=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(s.a)(this,Object(m.a)(t).call(this,e))).state={opened:!1,menuItems:[{title:"Home",id:"home",icon:i.a.createElement(d.a,{icon:p.e,size:"lg"})},{title:"About Me",id:"about-me",icon:i.a.createElement(d.a,{icon:p.b,size:"lg"})},{title:"Projects",id:"projects",icon:i.a.createElement(d.a,{icon:E.a,size:"lg"})},{title:"CV",id:"cv",icon:i.a.createElement(d.a,{icon:p.f,size:"lg"})}]},a.handleClick=a.handleClick.bind(Object(L.a)(a)),a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"handleClick",value:function(){this.state.opened?(document.getElementById("menu-icon").classList.remove("animation-rotate-1"),document.getElementById("menu-icon").classList.add("animation-rotate-2")):(document.getElementById("menu-icon").classList.remove("animation-rotate-2"),document.getElementById("menu-icon").classList.add("animation-rotate-1"));var e=this.state.opened;this.setState({opened:!e})}},{key:"render",value:function(){return this.state.opened?i.a.createElement("div",{className:"menu fade-in"},i.a.createElement("div",{className:"menu-button",onClick:this.handleClick},i.a.createElement("div",{id:"menu-icon"},i.a.createElement(d.a,{className:"menu-icon",icon:p.a,size:"lg"}))),i.a.createElement("ul",{className:"menu-list"},this.state.menuItems.map((function(e,t){return i.a.createElement("li",{key:t,className:"menu-item"},i.a.createElement(h.Link,{activeClass:"active",to:e.id,spy:!0,smooth:!0,duration:500},e.icon,i.a.createElement("span",{style:{marginLeft:"0.5em"}},e.title)))})))):i.a.createElement("div",{className:"menu"},i.a.createElement("div",{className:"menu-button",onClick:this.handleClick},i.a.createElement("div",{id:"menu-icon"},i.a.createElement(d.a,{icon:p.a,size:"lg"}))))}}]),t}(i.a.Component),V=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(s.a)(this,Object(m.a)(t).call(this,e))).state={},a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return i.a.createElement("div",null,i.a.createElement(F,null),i.a.createElement(b,null),i.a.createElement(v,{id:"home"}),i.a.createElement(y,{id:"about-me"}),i.a.createElement(P,{id:"projects"}),i.a.createElement(D,{id:"cv"}))}}]),t}(i.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(i.a.createElement(V,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[34,1,2]]]);
//# sourceMappingURL=main.7f0fc29e.chunk.js.map