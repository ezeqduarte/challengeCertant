const cors = require("cors");
const express = require("express");
const usersPokemons = require("./data");

const app = express();

app.use(express.json());
app.use(cors());

/*/security /*/

app.post("/login", (req, res) => {
  const { username, password } = req.body;

  if (username === "trainer" && password === "password") {
    return res.status(200).json({
      description: "User was found on the system with valid credentials",
      content: { userId: "1", username: "trainer" },
    });
  }

  if (username === "master" && password === "password") {
    return res.status(200).json({
      description: "User was found on the system with valid credentials",
      content: { userId: "2", username: "master" },
    });
  }

  return res.status(401).json({ description: "Invalid credentials" });
});

/*/ Pokemon /*/

app.get("/pokemon", validateUserId, (req, res) => {
  const { userId } = req.query;

  return res.status(200).json({
    description: "All the pokemons owned by the user",
    content: usersPokemons.get(userId),
  });
});

app.post("/pokemon", validateUserId, (req, res) => {
  const { pokemon, userId } = req.body;
  const newPokemons = [...usersPokemons.get(userId), pokemon];
  usersPokemons.set(userId, newPokemons);

  res.status(201).json({
    description: "pokemons edited",
    content: newPokemons,
  });
});

app.put("/pokemon", validateUserId, (req, res) => {
  const { pokemon, userId } = req.body;
  const editedPokemons = [...usersPokemons.get(userId)].map((p) =>
    p.id === pokemon.id ? pokemon : p
  );
  usersPokemons.set(userId, editedPokemons);

  res
    .status(200)
    .json({ description: "pokemons edited", content: editedPokemons });
});

function validateUserId(req, res, next) {
  const userId = req.body.userId || req.query.userId;

  if (!usersPokemons.has(userId)) {
    return res.status(404).json({ description: "UserId not found" });
  }

  next();
}

app.listen(3001, () => {
  console.log("server listening port 3001");
});
