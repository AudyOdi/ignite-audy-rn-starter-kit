import fs from 'fs';
import path from 'path';
import updateVersion from '../src/helpers/updateVersion';

let [versionLevel] = process.argv.slice(2);

let file = path.join(__dirname, '../package.json');
try {
  let obj = JSON.parse(fs.readFileSync(file, 'utf8'));
  let newVersion = updateVersion(obj.version, versionLevel);

  let newObj = {
    ...obj,
    version: newVersion,
    buildTime: Math.floor(Date.now() / 1000)
  };

  fs.writeFileSync(file, JSON.stringify(newObj, null, 2));
  console.log('version bump success!', newObj.version, newObj.buildTime); // eslint-disable-line
} catch (err) {
  console.log(err); // eslint-disable-line
}
