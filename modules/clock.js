import { time } from './variable.js';
import { DateTime } from './luxon.js';

const displayClock = () => {
  setInterval(() => {
    const timeNow = DateTime.now().toFormat('yyyy-MM-dd HH:mm:ss');
    time.innerHTML = timeNow;
  }, 1);
};

export default displayClock;