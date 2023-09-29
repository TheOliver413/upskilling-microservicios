const axios = require("axios");
const films = require("./films.json");

module.exports = {
    list: async () => {
        const result = await axios.get("http://database:8004/Film");
        return result.data;
    },

    create: async () => {
        throw Error("Hay un error al crear una pelicula");
    },
}