const timer = (id, deadline) => {
  const addZero = (num) => {
    if (num <= 9) {
      return '0' + num;
    } else {
      return num;
    }
  };

  const  getTimeRemaining = (endtime) => {
    const t = Date.parse(endtime) - Date.parse(new Date()),
          seconds = Math.floor((t/1000) % 60),
          minutes = Math.floor((t/1000/60) % 60),
          hours = Math.floor((t/(1000 * 60 * 60)) % 24),
          days = Math.floor((t/(1000 * 60 * 60 * 24)));

    return {
      'total': t,
      days,
      hours,
      minutes,
      seconds,
    };
  };

  const setCLock = (selector, endtime) => {
    const timer = document.querySelector(selector),
          days = timer.querySelector("#days"),
          hours = timer.querySelector("#hours"),
          minutes = timer.querySelector("#minutes"),
          seconds = timer.querySelector("#seconds"),
          timeInterval = setInterval(updateCLock, 1000);

    updateCLock();
    
    function updateCLock() {
      const t = getTimeRemaining(endtime);

      days.textContent = addZero(t.days);
      hours.textContent = addZero(t.hours);
      minutes.textContent = addZero(t.minutes);
      seconds.textContent = addZero(t.seconds);

      if (t.total <= 0) {
        days.textContent = "00";
        hours.textContent = "00";
        minutes.textContent = "00";
        seconds.textContent = "00";

        clearInterval(timeInterval);
      }
    }
  };
  setCLock(id, deadline);
};

export default timer;
