const userInfo = {};
const job = "developer";

userInfo.firstName = "Yanira";
userInfo.lastName = "Fernández";
userInfo.age = 31;
userInfo.job = job;

userInfo.firstName = "Lissandra";

// userInfo.addAge = function () {
//   userInfo.age += 1;
// };

// userInfo.addAge();

userInfo.addAge = (add) => (userInfo.age += 1);
userInfo.addAge();

console.log(userInfo);
