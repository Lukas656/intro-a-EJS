const express = require('express');
const app = express();
const port = 8080;
app.set("view engine", "ejs");


app.get("/", (req, res) => {
    const itens = [
    {
        title: "D",
        message: "esenvolver aplicações/Serviços de forma facil"
    },
    {
        title: "E",
        message: "JS usa Javascript para renderizart html"
    },
    {
        title: "M",
        message: "uito Facil de usar"
    },
    {
        title: "A",
        message: "morzinho"
    },
    {
        title: "i",
        message: "nstall ejs"
    },
    {
        title: "S",
        message: "intaxe Simples"
    }
];
const subtitle = "Uma linguagem de modelagem para criação de páginas HTML";
    res.render("pages/index",{
        qualitys: itens,
        subtitle: subtitle,
    });// não precisa dizer index.ejs por conta da linha 4
});
app.get("/sobre", (req, res) => {
    res.render("pages/about");
});

app.listen(port, () => {
    console.log(`Rodando na porta: http://localhost:${port}`)
});