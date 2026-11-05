const { add } = require("./index");

if (add(2, 3) !== 5) {
  console.error("Тест провален");
  process.exit(1);
}
console.log("Тест пройден");
