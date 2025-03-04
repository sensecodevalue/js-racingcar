import BaseView from './Base/View.js';

export default class ViewWinner extends BaseView {
  constructor(app) {
    super(app);
    this.$raceWinner = document.querySelector('#race-winner');
  }

  render() {
    if (this.model.getHasRaceWinner()) {
      const winners = this.model.state.winners.join(', ').trim();
      this.$raceWinner.textContent = `🏆 최종 우승자: ${winners} 🏆`;
    } else {
      this.$raceWinner.textContent = '';
    }
  }
}
