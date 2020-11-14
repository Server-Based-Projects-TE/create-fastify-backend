const { name, version } = require('./package.json');
const hash = require('child_process').execSync("git rev-parse --short HEAD | tr -d '\n'").toString();
const date = new Date(
  require('child_process').execSync('git --no-pager log -1 --format="%ai"').toString()
).toISOString();
require('fs').writeFileSync(
  './src/config/version.json',
  JSON.stringify({ name, version, commit: { hash, date }, build: { date: new Date().toISOString() } }, null, 2)
);
