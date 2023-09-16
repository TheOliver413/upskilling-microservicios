const planest = require("./planets.json")

module.exports = {
    list: async () => {
        return planest;
    },

    create:async() => {
        throw Error("Hay un error al crear una planeta");
    },
}