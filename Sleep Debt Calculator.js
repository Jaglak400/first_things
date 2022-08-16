const getSleepHours = (day) => {
  switch (day) {
    case "monday":
      return 8;
    case "tuesday":
      return 6;
    case "wednesday":
      return 7;
    case "thursday":
      return 9;
    case "friday":
      return 5;
    case "saturday":
      return 10;
    case "sunday":
      return 11;
  }
};
/* console.log(getSleepHours('monday')); */

/* const getActualSleepHours = () =>
  getSleepHours("monday") +
  getSleepHours("tuesday") +
  getSleepHours("wednesday") +
  getSleepHours("thursday") +
  getSleepHours("friday") +
  getSleepHours("saturday") +
  getSleepHours("sunday"); */

const getActualSleepHours = () => 8 + 6 + 7 + 9 + 5 + 10 + 11;

/* const getIdealSleepHours = () => {
  const idealHours = 8;
  return idealHours * 7;
}; */

const getIdealSleepHours = (idealHours) => idealHours * 7;

const calculateSleepDebt = () => {
  const actualSleepHours = getActualSleepHours();
  const idealSleepHours = getIdealSleepHours(8);

  if (actualSleepHours === idealSleepHours) {
    console.log(`You got perfect amount of sleep.(${actualSleepHours} hours)`);
  } else if (actualSleepHours > idealSleepHours) {
    console.log(
      `You got more hours than needed.(${
        actualSleepHours - idealSleepHours
      } more hours)`
    );
  } else {
    console.log(
      `Get some sleep.(${idealSleepHours - actualSleepHours} less hours)`
    );
  }
};
calculateSleepDebt();
