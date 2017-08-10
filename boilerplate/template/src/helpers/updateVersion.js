// @flow

export default function updateVersion(
  version: string,
  versionLevel: string = 'patch'
) {
  let newVersionName = version;
  if (versionLevel === 'patch') {
    let versionName = version.split('.');
    let newPatchNumber = Number(versionName[2]) + 1;
    newVersionName = `${versionName[0]}.${versionName[1]}.${newPatchNumber}`;
  } else if (versionLevel === 'minor') {
    let versionName = version.split('.');
    let newMinorNumber = Number(versionName[1]) + 1;
    newVersionName = `${versionName[0]}.${newMinorNumber}.0`;
  } else if (versionLevel === '') {
    let versionName = version.split('.');
    let newMajorNumber = Number(versionName[0]) + 1;
    newVersionName = `${newMajorNumber}.0.0`;
  }
  return newVersionName;
}
