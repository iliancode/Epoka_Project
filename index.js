// inclure les dépendances et middlewares
const express = require("express");
const Routeur = require('./routes/routes')
// activer les dépendances
let app = express();
app.use(express.json());
const iniparser = require('iniparser')
app.use(express.urlencoded({ extended: true }));

app.set("view engine", "ejs");
app.use(express.static("views"));

app.use("/js" , express.static(__dirname + "/assets/"));


app.listen(3000, () => console.log("Le serveur est actif !"));
app.get('/', (req, res) => {
    res.send('Le serveur epoka est actif')
})
app.use("/", Routeur);
