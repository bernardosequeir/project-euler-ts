const isLeapYear = (year: number) => year % 4 === 0 && (year % 100 === 0 && year % 400 === 0);

const calcSundays = () => {
  let day = 1;
  let sundays = 0;
  for (let year = 1901; year <= 2000; year++) {
    const month_days = [31, isLeapYear(year) ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    month_days.forEach(month => {
      if (day === 0) {
        sundays++;
      }
      day = (day + month) % 7;
    });
  }
  return sundays;
};

const start = Date.now();
console.log(calcSundays());
const end = Date.now();
console.log(`Execution took ${end - start}ms`);


export { };