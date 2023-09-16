const planest = require("./planets.json")

module.exports = {
    list: async () => {
        return planest;
    },
}