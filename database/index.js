const server = require("./src/server");

const { Character, Film, Planet } = require("./src/database")

// Character.list().then((res) => console.log(res));
// Character.get(1).then((res) => console.log(res));
// Character.insert({
//   _id: "200",
//   name: "Oliver Borda",
//   birth_year: "2003",
// }).then((res) => console.log(res));

// Film.list().then((res) => console.log(res));
// Film.get(1).then((res) => console.log(res));
// Film.insert({
//   _id: "200",
//   title: "Oliver Movie",
//   director: "UwU",
// }).then((res) => console.log(res));

// Planet.list().then((res) => console.log(res));
// Planet.get(1).then((res) => console.log(res));
// Planet.insert({
//   _id: "200",
//   name: "Oliver Planet",
//   diameter: "4137",
// }).then((res) => console.log(res));

const PORT = 8004;

server.listen(PORT, () => {
  console.log(`Database service listening on port ${PORT}`);
});
