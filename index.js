const information = require('./information');
let cowsay = require("cowsay");

console.log(cowsay.say({
    text: `Hello, I'm ${information.name} from ${information.campus}!`,
}));