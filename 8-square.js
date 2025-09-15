const size = parseInt(process.argv[2]);

if (isNaN(size)) {
  console.log("Missing size");
} else {
  let i = 0;
  while (i < size) {
    console.log("X".repeat(size));
    i++;
  }
}

// const size = parseInt(process.argv[2]);

// if (isNaN(size)) {
//   console.log("Missing size");
// } else {
//   for (let i = 0; i < size; i++) {
//     console.log("X".repeat(size));
//   }
// }