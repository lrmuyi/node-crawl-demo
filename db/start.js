const model = require("./exportModel");
const data = require("./data/user.json").data;
let User = model.User;
const createTable = async model => {
  await model.sync({ force: true, match: /_test$/ });
};

const createUser = data => {
  User.sync({ force: true, match: /_test$/ }).then(function() {
    for (const item of data) {
      User.create(item);
      console.log(item);
    }
  });
};

(async () => {
  await createTable(model);
  // await createUser(data);
})();
