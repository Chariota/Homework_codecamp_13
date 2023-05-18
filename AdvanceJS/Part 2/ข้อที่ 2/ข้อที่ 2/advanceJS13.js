let str = prompt("String :");

function checkSpam(str) {
  return str.indexOf("xxx") >= 0 || str.indexOf("viagra") >= 0 ? true : false;
}

console.log(checkSpam(str));
