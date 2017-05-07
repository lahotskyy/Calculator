import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-simple-mode',
  templateUrl: './simple-mode.component.html',
  styleUrls: ['./simple-mode.component.css']
})
export class SimpleModeComponent implements OnInit {

  MAX_COUNT_NUMBER: number;

  result: string;
  isEval: boolean;
  isNewNumber: boolean;
  indexLastOperation: number;
  resultReverse: string;
  canNewOperation: boolean;

  constructor() { }

  ngOnInit() {
    this.result = '0';
    this.isEval = false;
    this.isNewNumber = true;
    this.canNewOperation = false;
    this.MAX_COUNT_NUMBER = 12;
  }

  saveResult() {
    localStorage.setItem('result', this.result);
  }

  resultFromMemory() {
    this.result += localStorage.getItem('result');
  }

  backSpace() {
    this.result = this.result.substring(0, this.result.length - 1);
    this.canNewOperation = true;

    return this.result;
  }

  buttonCE() {
    this.resultReverse = this.result.split("").reverse().join("");
    this.indexLastOperation = this.resultReverse.match(/[\/\*\-\+]/).index;
    this.result = this.result.substring(0, this.result.length - this.indexLastOperation);

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

  addNumber(value) {
    if (this.result.length < this.MAX_COUNT_NUMBER) {
      if (this.result === '0' || this.isEval) {
        this.result = value;
      } else {
        this.result += value;
      }

      this.isEval = false;
      this.canNewOperation = true;
      this.isNewNumber = false;

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
    this.result = String(+Number(eval(this.result)).toFixed(10));
    this.isEval = true;
    this.canNewOperation = true;

    return this.result;
  }

}
