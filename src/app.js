const express = require("express");
const hbs = require("hbs");
const path = require("path");
const app = express();
const port  = process.env.PORT || 3000;

const staticPath = path.join(__dirname, "../public");
const templatePath = path.join(__dirname, "../template/views");
const partialsPath = path.join(__dirname, "../template/partials");

app.set('view engine', 'hbs');
app.set('views', templatePath);
hbs.registerPartials(partialsPath);

app.use(express.static(staticPath));

app.get("/", (req, res)=>{
    res.render("index");
});
app.get("/weather", (req, res)=>{
    res.render("weather");
});
app.get("/about", (req, res)=>{
    res.render("about");
});
app.get("*", (req, res)=>{
    res.render("404error",{
        errmag: "Opps! Page is not found, Click here to go back"
    });
});

app.listen(port, ()=>{
    console.log(`Server is listening port ${port}`);
});