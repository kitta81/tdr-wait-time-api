const Themeparks = require('themeparks');
const fs = require('fs');

const Park = {
  tdl: 'tdl',
  tds: 'tds'
};

const getParkObject = parkName =>
  parkName === Park.tds
    ? new Themeparks.Parks.TokyoDisneyResortDisneySea()
    : new Themeparks.Parks.TokyoDisneyResortMagicKingdom();

const outputWaitTime = async park => {
  const parkObject = getParkObject(park);
  await fs.writeFile(
    `/var/www/html/${park}.json`,
    JSON.stringify(await parkObject.GetWaitTimes()),
    () => {}
  );
};

(async () => {
  await outputWaitTime(Park.tdl);
  await outputWaitTime(Park.tds);
})();
