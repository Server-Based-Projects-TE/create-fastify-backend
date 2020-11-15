const package = require('./package.json');
const { execSync } = require('child_process');

const { name, version } = package;

const commit = {
  hash: execSync("git rev-parse --short HEAD | tr -d '\n'").toString(),
  date: new Date(execSync('git --no-pager log -1 --format="%ai"').toString()).toISOString(),
};

const build = {
  number: Number(execSync('git rev-list master --first-parent --count').toString()),
  date: new Date().toISOString(),
};

require('fs').writeFileSync(
  './build/config/release.json',
  JSON.stringify({ name, version, commit, build }, null, 2) + '\n'
);
