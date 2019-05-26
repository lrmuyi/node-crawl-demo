const model = require("./exportModel");
// console.log("=====", model.sync.toLocaleString);

const dbInit = model => {
  model.sync({
    force: true,
    match: /_test$/
  }).then(res => {
    console.log(res);
    console.log("init db ok");
  });
};

(async model => {
  await dbInit(model);
})();