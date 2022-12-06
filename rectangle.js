//exports is shorthand for module.exports. YOu can use this when defining a method on the exports
//this file is a module with 2 exports
//exports is an object
//we are created methods on the exports object

//assign a function as the value for the entire export instead just a method of the export, so
//we can't use the shorthand
module.exports = (x, y, callback) => {
  if (x <= 0 || y <= 0) {
    //node error callback pattern is important!
    //it is standard practice in node JS for async functions to return an error object as the first argument
    //error is a global object
    callback(
      new Error(
        `Rectangle dimensions must be greater than zero. Received: ${x}, ${y}`
      )
    );
  } else {
    setTimeout(
      () =>
        callback(null, {
          perimeter: () => 2 * (x + y),
          area: () => x * y,
        }),
      2000
    );
  }
};
