const Themeparks = require('themeparks');
const fs = require('fs');

const getPark = url =>
  url === 'tds'
    ? new Themeparks.Parks.TokyoDisneyResortDisneySea()
    : new Themeparks.Parks.TokyoDisneyResortMagicKingdom();

(async () => {
  const tdr = getPark('tdr');
  await fs.writeFile(
    '/var/www/html/tdr.json',
    JSON.stringify(await tdr.GetWaitTimes()),
    () => {}
  );

  const tds = getPark('tds');
  await fs.writeFile(
    '/var/www/html/tds.json',
    JSON.stringify(await tds.GetWaitTimes()),
    () => {}
  );
})();
