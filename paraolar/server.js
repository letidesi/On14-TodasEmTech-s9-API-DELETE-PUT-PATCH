const app = require("./src/app");
const PORT = 4000;
app.listen(PORT, () => {
  console.log(`Servidor está conectado na porta ${PORT}.`);
});
