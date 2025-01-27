function debounce(func, timeout = 300) {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      func.apply(this, args);
    }, timeout);
  };
}
function logMessage() {
  console.log("Hello Ali");
}
const debounceLog = debounce(() => logMessage());

debounceLog();
debounceLog();
debounceLog();
debounceLog();
debounceLog();
debounceLog();
