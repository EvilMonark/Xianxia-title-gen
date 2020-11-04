const express = require("express");
const path = require('path');
const { randomInt } = require("crypto");
const server = express();
var xianxia_title = ""
const Words = [
    "Heavens ", "Destroyer ", "Jade Peak ", "Emperor ", "Martial ", "God ", "Primal ", "Berserk "
]
//Escolhe um numero randomico entre 3 e 8 para ser o numero de palavras, depois de uma array retira as palavras para concatenar o titulo
function generate() {
    xianxia_title = "";
    var bucket = [];
    var length = randomInt(3,8);
    console.log(length);
    for(var i = 0; i< length; i++)
    {
        var index = randomInt(0,Words.length);
        if(bucket.indexOf(Words[index]) == -1 )
        {
            xianxia_title += Words[index];
            bucket.push(Words[index]);
        }
        else
        {
            index = -1;
            do
            {
                index++;
            }
            while(bucket.indexOf(Words[index])== -1 && index < Words.length);
        }
    }
}
server.get('/', (req,res)=>{
    res.send(`<div>
    <h1>${xianxia_title}</h1>
    <form>
        <button onclick=${generate()}>Generate</button>
    </form>
</div>`);
});

server.use((req,res,next)=>{
    res.status(404).send("Hi, this is not available at the moment!");
})
server.listen(6969,'localhost', ()=>{
    console.log("Served at: http://localhost:6969 ");
    console.log("Press Ctrl + C to kill");
});