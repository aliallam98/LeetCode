// const debounce = (func, delay = 500) => {
//   let timer;
//   return (...args) => {
//     clearTimeout(timer);
//     timer = setTimeout(() => {
//       func(...args);
//     }, delay);
//   };
// };

const debounce = (func, delay = 500) => {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      func.apply(this, args);
    }, delay);
  };
};

const sumLog = (...rest) => {
  const results = rest.reduce((acc, current) => acc + current);
  console.log(results);
};

debounce(sumLog(10, 20, 30));
debounce(sumLog(10, 20, 30));
debounce(sumLog(10, 20, 30));
debounce(sumLog(10, 20, 30));
debounce(sumLog(10, 20, 30));
debounce(sumLog(10, 20, 30));
debounce(sumLog(10, 20, 30));
debounce(sumLog(10, 20, 30));
debounce(sumLog(10, 20, 30));
debounce(sumLog(10, 20, 30));
debounce(sumLog(10, 20, 30));
debounce(sumLog(10, 20, 30));
debounce(sumLog(10, 20, 30));
debounce(sumLog(10, 20, 30));
debounce(sumLog(10, 20, 30));
debounce(sumLog(10, 20, 30));
debounce(sumLog(10, 20, 30));
debounce(sumLog(10, 20, 30));
debounce(sumLog(10, 20, 30));
debounce(sumLog(10, 20, 30));
debounce(sumLog(10, 20, 30));
