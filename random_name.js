const randomProfile = require('random-profile-generator');
const fs = require('fs');

let profile = [];

if (process.argv.length > 2) {
  for (let i = 0; i < process.argv[2]; i++)
    profile.push(randomProfile.name());
  fs.writeFileSync(`../results/${process.argv[2]}-names.txt`, profile.join('\n'));
} else {
  fs.writeFileSync(`../results/name.txt`, `${randomProfile.name()}`)
}
