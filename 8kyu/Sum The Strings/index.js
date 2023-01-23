function sumStr(a, b) {
  let sum;
  if (a == "") {
    a = 0;
  }
  if (b === "") {
    b = 0;
  }
  sum = parseInt(a) + parseInt(b);
  return sum.toString();
}
