process.title = "XianxiaTitleGenerator"
var args = process.argv;
const PORT = args[2] || 3000;
webserver = require("./server");

webserver.listen(PORT, () =>{
    console.log("Listening to port "+PORT);
})