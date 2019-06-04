import * as Obniz from 'obniz';

const OBNIZ_ID = '1234-5678';
const obniz = new Obniz(OBNIZ_ID);

obniz.onconnect = async () => {
  obniz.display.clear();
  obniz.display.print('Hello World!');

  const led = obniz.wired('LED', { anode: 0, cathode: 1 });
  led.on();

  setTimeout(() => {
    led.off();
  }, 3000);
};
