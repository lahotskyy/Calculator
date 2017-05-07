import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-advanced-mode',
  templateUrl: './advanced-mode.component.html',
  styleUrls: ['./advanced-mode.component.css']
})
export class AdvancedModeComponent implements OnInit {

  MAX_COUNT_NUMBER: number;

  result: string;
  isEval: boolean;
  isNewNumber: boolean;
  canNewOperation: boolean;

  constructor() { }

  ngOnInit() {
    this.result = '0';
    this.isEval = false;
    this.isNewNumber = true;
    this.canNewOperation = false;
    this.MAX_COUNT_NUMBER = 14;
  }

  saveResult() {
    this.result = this.evalNumber();
    localStorage.setItem('result', this.result);
  }

  resultFromMemory() {
   if (this.result.length < this.MAX_COUNT_NUMBER) {
      if (this.isLastOperation()) {
        this.result += localStorage.getItem('result');
      } else {
        this.result = localStorage.getItem('result');
      }
    }
  }

  backSpace() {
    this.result = this.result.substring(0, this.result.length - 1);
    if (this.result.slice(-1) !== '.') {
      this.canNewOperation = true;
    } else {
      this.canNewOperation = false;
    }
    this.isEval = false;

    return this.result;
  }

  buttonCE() {
    if (this.result.match(/[\/\*\-\+]/)) {
      const resultReverse = this.result.split("").reverse().join("");
      const indexLastOperation = resultReverse.match(/[\/\*\-\+]/).index;
      this.result = this.result.substring(0, this.result.length - indexLastOperation);
    } else {
      this.result = '0';
    }

    this.canNewOperation = false;
    this.isNewNumber = true;

    return this.result;
  }

  reset() {
    this.result = '0';
    this.isEval = false;
    this.isNewNumber = true;
    this.canNewOperation = false;
  }

  sqr() {
    this.result = String(Math.pow(Number(this.evalNumber()), 2));
    this.isEval = true;
    this.canNewOperation = true;
  }

  evalFactorial() {
    const resultN: number = Number(this.evalNumber());
    if (resultN > 20) {
       alert('Attention! You input too big number! Number must be less than 20.');
     } else if (resultN < 0) {
      alert('Attention! You input a negative number! Number must be more than 0.');
    } else {
      this.result = String(this.factorial(resultN));
    }

    this.isEval = true;
    this.canNewOperation = true;

    return this.result;
  }

  sin() {
    this.result = String(Math.sin(Number(this.evalNumber())).toFixed(6));
    this.isEval = true;
    this.canNewOperation = true;

    return this.result;
  }

  cos() {
    this.result = String(Math.cos(Number(this.evalNumber())).toFixed(6));
    this.isEval = true;
    this.canNewOperation = true;
 
    return this.result;
 }

  tan() {
    this.result = String(Math.tan(Number(this.evalNumber())).toFixed(6));
    this.isEval = true;
    this.canNewOperation = true;

    return this.result;
  }

  addNumber(value) {
    if (this.result.length < this.MAX_COUNT_NUMBER) {
      if (this.result === '0' || this.isEval) {
        this.result = value;
      } else {
        this.result += value;
      }

      this.isEval = false;
      this.canNewOperation = true;

      return this.result;
    }
  }

  addOperation(value) {
    if (this.result.length < this.MAX_COUNT_NUMBER) {
      if (this.canNewOperation) {
        this.isNewNumber = true;
        this.result += value;
        this.canNewOperation = false;
        this.isEval = false;
      }

      return this.result;
    }
  }

  addPoint() {
  if (this.result.length < this.MAX_COUNT_NUMBER) {
    if (this.isEval) {
        this.result = '0.';
        this.isEval = false;
      } else if (this.isNewNumber || !this.result.match(/\./)) {
        this.result += '.';
      }

      this.isNewNumber = false;
      this.canNewOperation = false;

      return this.result;
    }
  }

  evalNumber() {
    if (this.isLastOperation()) {
      this.result = this.result.substring(0, this.result.length - 1);
    }

    this.result = String(+Number(eval(this.result)).toFixed(10));
    this.isEval = true;
    this.canNewOperation = true;

    return this.result;
  }

  // Check if the operation is the last character (for evalNumber and resultFromMemory functions)
  isLastOperation() {
    const isMult = (this.result.slice(-1) === '*');
    const isDiv = (this.result.slice(-1) === '/');
    const isPlus = (this.result.slice(-1) === '+');
    const isSubtr = (this.result.slice(-1) === '-');
    if (isMult || isDiv || isPlus || isSubtr) {
      return true;
    } else {
      return false;
    }
  }

  factorial(num) {
    if (num === 0 || num < 0) {
      return 1;
    } else {
      return num * this.factorial( num - 1 );
    }
  }

}
