const model = require('./exportModel')
// console.log("=====", model.sync.toLocaleString);

const dbInit = async model => {
  await model.sync({
    force: true,
    match: /_test$/
  }).then(res => {
    console.log(res)
    console.log('init db ok')
  })
};

(async () => {
  await dbInit(model)
})()
