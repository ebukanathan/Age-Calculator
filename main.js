const day = document.getElementById("day");
const month = document.getElementById("month");
const year = document.getElementById("year");
const form = document.getElementById("form");
const arrow = document.getElementById("arrow");
const dayValidation = document.getElementsByClassName("dayValidation");

arrow.addEventListener("click", (e) => {
  e.preventDefault();

  const today = new Date();
  const thisYear = today.getFullYear();
  const thisMonth = today.getMonth() + 1;
  const thisDay = today.getDate();

  const parseDay = Number.parseFloat(day.value);
  const parseMonth = Number.parseFloat(month.value);
  const parseYear = Number.parseFloat(year.value);

  const displayYear = document.getElementById("yearTag");
  const displayMonth = document.getElementById("monthTag");
  const displayDay = document.getElementById("dayTag");

  const yearly = () => {
    let cYear = thisYear - parseYear;
    if (parseMonth > thisMonth) {
      displayYear.innerHTML = cYear - 1;
    } else {
      displayYear.innerHTML = cYear;
    }
  };

  const monthly = () => {
    let cMonth;
    if (!parseMonth) {
      cMonth = "00";
      // return (displayMonth.innerHTML = "00");
    } else if (parseMonth > thisMonth) {
      cMonth = 12 - (parseMonth - thisMonth);
      // return (displayMonth.innerHTML = cMonth);
    } else {
      cMonth = thisMonth - parseMonth;
      // return (displayMonth.innerHTML = cMonth);
    }

    return parseDay > thisDay
      ? (displayMonth.innerHTML = cMonth - 1)
      : (displayMonth.innerHTML = cMonth);
  };

  const dayly = () => {
    let cDay;
    if (parseDay > thisDay) {
      cDay = 31 + thisDay - parseDay;
      return (displayDay.innerHTML = cDay);
    } else {
      cDay = thisDay - parseDay;
      return (displayDay.innerHTML = cDay);
    }
  };

  yearly();
  monthly();
  dayly();
  month.value = 0;
  year.value = 0;
  day.value = 0;

  // if (parseDay > 31) {
  //   dayValidation.this.innerHTML = "<p>overtdose</p>";
  // }
  // console.log(thisDay);
});
