const axios = require("axios");
const characters = require("./characters.json");

module.exports = {
    list: async () => {
        const result = await axios.get("http://database:8004/Character");
        return result.data;
    },

    create: async () => {
        throw Error("Hay un error al crear un personaje");
    },
}