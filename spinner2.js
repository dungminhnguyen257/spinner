let counter = 100;
const symbols = ["|", "/", "-", "\\", "|", "/", "-", "\\", "|"];

for (const char of symbols) {
  setTimeout(() => {
    // print the char here
    process.stdout.write(`\r${char}   `);
  }, counter);
  counter += 200;
}
