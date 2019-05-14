const model = require("./model");

let User = model.User;

(async () => {
  var user = await User.create({
    name: "John",
    gender: false,
    birth:'20190102'
   
  });
  console.log("created: " + JSON.stringify(user));
})();
