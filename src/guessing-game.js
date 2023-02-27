class GuessingGame {
  constructor() {}
  guessValue = 0;
  minValue = 0;
  maxValue = 0;

  setRange(min, max) {
    this.minValue = min;
    this.maxValue = max;
  }

  guess() {
    this.guessValue = Math.ceil((this.minValue + this.maxValue) / 2);
    return this.guessValue;
  }

  lower() {
    this.maxValue = this.guessValue;
  }

  greater() {
    this.minValue = this.guessValue;
  }
}

module.exports = GuessingGame;
