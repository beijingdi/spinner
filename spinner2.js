let str = "There is no such disease"
let printTime = 0;
let time = [];
console.log(typeof(time));
for (let i = 0; i < str.length; i++) {
  time.push(printTime);
  printTime += 50;
}

for (let i = 0; i < str.length; i++) {
  setTimeout(() => {
  process.stdout.write('\r' + str[i]);
  }, time[i]);
}

