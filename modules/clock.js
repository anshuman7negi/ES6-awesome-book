import { time } from './variable.js';

export default function displayClock(DateTime) {
  setInterval(() => {
    const timeNow = DateTime.now().toFormat('yyyy-MM-dd HH:mm:ss');
    time.innerHTML = timeNow;
  }, 1);
}
