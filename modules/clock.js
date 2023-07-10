import { DateTime } from '../node_modules/luxon/src/luxon.js';
import { time } from './variable.js';

export default function displayClock() {
  const timeNow = DateTime.now().toFormat('yyyy-MM-dd HH:mm:ss');
  time.innerHTML = timeNow;
}
