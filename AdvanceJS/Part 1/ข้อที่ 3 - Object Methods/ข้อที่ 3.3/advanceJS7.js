let calculator = {
  read() {
    this.num1 = +prompt("Number 1: ");
    this.num2 = +prompt("Number 2: ");
  },
  sum() {
    return this.num1 + this.num2;
  },
  mul() {
    return this.num1 * this.num2;
  }
};

calculator.read();
alert(calculator.sum());
alert(calculator.mul());
