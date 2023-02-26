require("dotenv").config();
require("./Config/DatabaseConnection");
const app = require("./app");
const port = process.env.PORT || 8080;

app.listen(port, () => {
  console.log(`app is runnit at http://localhost:${port}`);
});
