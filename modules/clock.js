import { time } from './variable.js';
// eslint-disable-next-line import/no-unresolved
import { DateTime } from '../node_modules/luxon/src/luxon.js';

export default function displayClock() {
  setInterval(() => {
    const timeNow = DateTime.now().toFormat('yyyy-MM-dd HH:mm:ss');
    time.innerHTML = timeNow;
  }, 1);
}
