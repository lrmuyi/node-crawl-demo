const model = require("./model");
const data = require("./data/user.json").data;
let User = model.User;

const createTable = async(model) => {
  await model.sync({ force: false });
};
const createUser = async data => {
  for (const item of data) {
    await User.create(item);
  }
};

(async () => {
  await createTable(model);
  await createUser(data);
})();
