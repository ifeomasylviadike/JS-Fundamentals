const args = process.argv.slice(2);

if (args.length === 0) {
  console.log("undefined is undefined");
} else if (args.length === 1) {
  console.log("HBTN is undefined");
} else {
  console.log("Python is fun");
}