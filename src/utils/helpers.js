// source: https://www.w3resource.com/javascript-exercises/javascript-string-exercise-9.php
export function capitaliseWord(str) {
  return str.replace(/\w\S*/g, function (txt) {
    return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
  });
}


