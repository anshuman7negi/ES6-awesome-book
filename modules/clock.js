import { time } from './variable.js';
import { DateTime } from '../node_modules/luxon/build/es6/luxon.js';

export default function displayClock() {
  setInterval(() => {
    const timeNow = DateTime.now().toFormat('yyyy-MM-dd HH:mm:ss');
    time.innerHTML = timeNow;
  }, 1);
}
