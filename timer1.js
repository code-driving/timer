const args = process.argv.slice(2);

const setTimer = (args) => {
  if (!args.length) return;

  for (let char of args) {
    if (!isNaN(char) && char > 0) {
      setTimeout(() => {
        process.stdout.write("\x07");
      }, char * 1000);
    }
  }
};
console.log(setTimer(args))

/*No numbers are provided: Easy. It should just not beep at all and end immediately since no beeps should get scheduled.
An input is a negative number: Ignore/skip any numbers that are negative. We can't schedule anything in the past.
An input is not a number: Ignore/skip these as well, instead of attempting to call setTimeout with a non-number.*/


