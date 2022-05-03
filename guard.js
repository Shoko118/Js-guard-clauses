// Guard Clauses which is to remove all nesting if else statement
const person = {
  age: 22,
};

function canPersonAgeDrink(age) {
  if (age <= 18) return "NO 😢";
  if (age <= 21) return "Need wait more longer 😫";

  return "YES !!!";
}

function canDrinkBeer(person) {
  if (person.age == null) return console.log("Get out 😠");

  const result = canPersonAgeDrink(person.age);
  console.log(result);
}

canDrinkBeer(person);
