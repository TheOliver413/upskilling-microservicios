const axios = require("axios");
const planest = require("./planets.json")

module.exports = {
    list: async () => {
        const result = await axios.get("http://database:8004/Planet");
        return result.data;
    },

    create: async () => {
        throw Error("Hay un error al crear una planeta");
    },
}