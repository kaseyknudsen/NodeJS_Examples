// const rect = {
//   perimeter: (x, y) => 2 * (x + y),
//   area: (x, y) => x * y,
// };
//require is a function from node. It reads a JS file, executes the file, and then
//proceeds to return the exports object
const rect = require("./rectangle");

function solveRect(l, w) {
    // 1)
  console.log(`Solving for rectangle with dimensions: ${l}, ${w}`);

  rect(l, w, (err, rectangle) => {
    if (err) {
      console.log("ERROR:", err.message);
    } else {
        // 3)
      console.log(`Area of rectangle with dimensions ${l}, ${w} is: ${rectangle.area()}`);
    //   4)
      console.log(`Perimeter of rectangle with dimensions ${l}, ${w}: ${rectangle.perimeter()}`);
    }
  });
//   2)
  console.log("This statement is logged after the call to rect()")
}

solveRect(2, 4);
// solveRect(3, 5);
// solveRect(0, 5);
// solveRect(5, -3);



// this is how it executes:
// Solving for rectangle with dimensions: 2, 4
// This statement is logged after the call to rect()
// Area of rectangle with dimensions 2, 4 is: 8
// Perimeter of rectangle with dimensions 2, 4: 12