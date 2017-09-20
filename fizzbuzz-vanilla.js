var input = parseInt(process.argv[2]);

function fizzBuzz() {
  switch (true) {
    case (input % 3 === 0 && input % 5 === 0):
      console.log("fizzbuzz");
      break;
    case (input % 3 === 0):
      console.log("fizz");
      break;
    case (input % 5 === 0):
      console.log("buzz");
      break;
    default:
      console.log(input);
  }
}

fizzBuzz();
