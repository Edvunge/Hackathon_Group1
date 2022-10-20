function validateEmail(email) {
  // Esta expressão regular não garante que email existe, nem que é válido
  // No entanto deverá funcionar para a maior parte dos emails que seja necessário validar.
  const EMAIL_REGEX =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return EMAIL_REGEX.test(email);
}

function checkPasswordStrength(password) {
  if (password.length < 8) return 0;
  const regexes = [/[a-z]/, /[A-Z]/, /[0-9]/, /[~!@#$%^&*)(+=._-]/];
  return regexes
    .map((re) => re.test(password))
    .reduce((score, t) => (t ? score + 1 : score), 0);
}

async function sameDay(date1, date2) {
  return (
    date1.getFullYear() === date2.getFullYear() &&
    date1.getMonth() === date2.getMonth() &&
    date1.getDate() === date2.getDate()
  );
}

function getDayOfWeek(n) {
  switch (n) {
    case 0:
      return "Sunday";
    case 1:
      return "Monday";
    case 2:
      return "Tuesday";
    case 3:
      return "Wednesday";
    case 4:
      return "Thursday";
    case 5:
      return "Friday";
    case 6:
      return "Saturday";
  }
}

function getMonths(n) {
  switch (n) {
    case 0:
      return "January";
    case 1:
      return "February";
    case 2:
      return "March";
    case 3:
      return "April";
    case 4:
      return "May";
    case 5:
      return "June";
    case 6:
      return "July";
    case 7:
      return "August";
    case 8:
      return "September";
    case 9:
      return "October";
    case 10:
      return "November";
    case 11:
      return "December";
  }
}

function getWeek(date) {
  let startDate = new Date(date.getFullYear(), 0, 1);
  let days = Math.floor((date - startDate) / (24 * 60 * 60 * 1000));
  return Math.ceil(days / 7);
}

export {
  checkPasswordStrength,
  validateEmail,
  sameDay,
  getDayOfWeek,
  getMonths,
  getWeek
};
