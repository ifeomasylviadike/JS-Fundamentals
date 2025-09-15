const x = parseInt(process.argv[2]);

if (isNaN(x)) {
  console.log("Missing number of occurrences");
} else {
  for (let i = 0; i < x; i++) {
    console.log("C is fun");
  }
}

// if (isNaN(x)) {
//   console.log("Missing number of occurrences");
// } else {
//   let i = 0;
//   while (i < x) {
//     console.log("C is fun");
//     i++;
//   }
// }