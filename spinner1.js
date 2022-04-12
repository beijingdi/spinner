setTimeout(() => {
  process.stdout.write('\rT   ');
}, 100);

setTimeout(() => {
  process.stdout.write('\rG   ');
}, 300);

setTimeout(() => {
  process.stdout.write('\rI   ');
}, 500);

setTimeout(() => {
  // Need to escape the backslash since it's a special character.
  process.stdout.write('\rF   '); 
}, 700);