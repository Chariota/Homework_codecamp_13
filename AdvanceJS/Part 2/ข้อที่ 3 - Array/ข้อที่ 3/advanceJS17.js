function sumInput() {
  let num = [];

  while (true) {
    let value = +prompt("Enter The Number : ");

    if (isNaN(value)) break; // หากไม่ใช่ตัวเลข จบการทำงาน
    num.push(value);
  }

  let sum = 0;

  for (let nums of num) {
    sum += nums;
  }

  return sum;
}

console.log(sumInput());
