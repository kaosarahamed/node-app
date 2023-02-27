const app = require("./app");
const port = process.env.PORT || 8080;
require("dotenv").config();

app.listen(port, () => {
  console.log(`app is runnit at http://localhost:${port}`);
});
