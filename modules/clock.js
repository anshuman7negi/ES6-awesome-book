import { time } from './variable.js';
import { DateTime } from '../node_modules/luxon/src/luxon.js'; // eslint-disable-next-line import/no-unresolved

export default function displayClock() {
  setInterval(() => {
    const timeNow = DateTime.now().toFormat('yyyy-MM-dd HH:mm:ss');
    time.innerHTML = timeNow;
  }, 1);
}
