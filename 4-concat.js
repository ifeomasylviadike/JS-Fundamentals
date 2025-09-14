const args = process.argv.slice(2);

if (args.length === 0) {
  console.log("Argument is undefined");
} else if (args.length === 1) {
  console.log("Argument is defined");
} else {
  console.log("Arguments is defined");
}