const {catchedAsync} = require("../utils")

module.exports={
    getCharacters: catchedAsync(require("./getCharactes")),
    createCharacters: catchedAsync(require("./createCharacters")),
}