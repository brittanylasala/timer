var myAlarms = process.argv.slice(2);
myAlarms.forEach(function(time) {
  if (time > 0) {
    setTimeout(() => {
      process.stdout.write('\x07');
    }, time * 1000)
  }
})