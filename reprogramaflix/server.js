const app = require("./src/app");
const PORT = 5000
app.listen(PORT, () => {
  console.log(`Servidor conectado na porta ${PORT}.`);
});
