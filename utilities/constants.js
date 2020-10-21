
const newRandomUser = ()=>{
  var randomEmail = require("random-email");
  var randomLorem = require("random-lorem");
    return {name: randomLorem(),
          email: randomEmail(),
          password: randomLorem()    
      };
}
const USER = newRandomUser();

export { USER };
