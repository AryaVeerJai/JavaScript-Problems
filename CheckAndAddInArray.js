// Get the array all value but only onece not repeated value (all values but only once)
//Check the cars[] all element is present in the new[]cars

const cars = ["Saab", "Volvo", "Saab" ,"BMW"];
const newcars = [];
let num = cars.length;
let i = 0;

//Looping to the num(length of the cars[]) one by one from i = 0; to i = num which is the lenth of the array car[](car.length)
while(num >i){
  // Now checking the array car[] all values are present in the another array newcars[]
  let check = newcars.includes(cars[i]);

  if (check == false){
      // cars.push("audi");
      newcars.push(cars[i]);
  }
  //to increasing the value on i for the all elements in the cars which is the length of the array cars[]
  i++;
}

console.log(newcars);
