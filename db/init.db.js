const model = require("./exportModel");
// console.log("=====", model.sync.toLocaleString);
console.log(model.User);
async model => {
  await dbInit(model);
};
function dbInit(model) {
  model.User.sync({ force: true, match: /_test$/ }).then(function() {
    console.log("init db ok");
    // process.exit(0);
  });
}
