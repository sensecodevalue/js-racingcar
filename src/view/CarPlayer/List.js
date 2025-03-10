import BaseView from '../Base/View.js';

export default class ViewCarPlayerList extends BaseView {
  constructor(app) {
    super(app);
    this.$carPlayerList = document.querySelector('#car-player-list');
  }

  #createCarPlayerStepHtml(playerStep) {
    if (playerStep) {
      return '<div class="forward-icon mt-2">⬇️️</div>';
    }

    return `
      <div class="d-flex justify-center mt-3">
        <div class="relative spinner-container">
          <span class="material spinner"></span>
        </div>
      </div>
    `;
  }

  #createCarPlayerHtml(player, playerSteps) {
    return `
      <div class="mr-2">
        <div class="car-player">${player}</div>
        ${playerSteps.map(this.#createCarPlayerStepHtml).join('')}
      </div>
    `;
  }

  render() {
    if (!this.model.getHasCarPlayerName() || !this.model.getHasAttempt()) {
      this.$carPlayerList.innerHTML = '';
      return;
    }

    const { carPlayerNames, racingSteps } = this.model.state;
    const carPlayerList = carPlayerNames
      .map(name => this.#createCarPlayerHtml(name, racingSteps[name] || []))
      .join('');

    this.$carPlayerList.innerHTML = carPlayerList;
  }
}
