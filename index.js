const randomProfile = require('random-profile-generator');
const fs = require('fs');
const getRandomInteger = require('./get-random-int');

let profile = [];

if (process.argv.length > 2) {
  for (let i = 0; i < process.argv[2]; i++)
    profile.push(randomProfile.name());
  fs.writeFileSync(`./results/${process.argv[2]}-names.txt`, profile.join('\n'));
} else {
  const rand = getRandomInteger(20);
  for (let i = 0; i < rand; i++)
    profile.push(randomProfile.name());
  fs.writeFileSync(`./results/${rand}-names.txt`, profile.join('\n'));
}
