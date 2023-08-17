class GuessingGame {
  constructor() {}

  setRange(min, max) {
    this.min = min;
    this.max = max;
  }

  guess() {
    return Math.round((this.min + this.max) / 2);
  }

  lower() {
    const min = this.min;
    const max = this.guess();
    this.setRange(min, max);
  }

  greater() {
    const min = this.guess();
    const max = this.max;
    this.setRange(min, max);
  }
}

module.exports = GuessingGame;
