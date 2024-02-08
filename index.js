import express from "express";
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const app = express();
const port = 3000;
const today = new Date();
let numDay = today.getDay();
var whatDay = ""
var whatAction = ""

if (numDay == 0 || numDay == 6){
    whatDay = "the weekend"
    whatAction = " have fun!"
}
else {
    whatDay = "a weekday"
    whatAction = "work!"
}

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {    
    res.render(__dirname + "/views/index.ejs",
    { day: whatDay, action: whatAction}
    );
});

app.listen(port, () => {
    console.log(`Server running on Port ${port}.`)
    console.log(numDay);
    console.log(whatDay);
    console.log(whatAction);
});