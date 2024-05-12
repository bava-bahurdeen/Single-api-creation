const MovieIndex = (req, res) => {
  res.json({ msg: "Get All Movies" });
};
const MovieCreate = (req, res) => {
  res.json({ msg: "Create a Movies" });
};
const MovieUpdate = (req, res) => {
  res.json({ msg: "Update the movie" });
};
const MovieDelete = (req, res) => {
  res.json({ msg: "Delete the movie" });
};

export {MovieCreate,MovieIndex,MovieUpdate,MovieDelete}