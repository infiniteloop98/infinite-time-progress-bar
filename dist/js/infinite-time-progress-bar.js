/**
 * Developer: Infinite Loop(Sajjad Noori)
 * Github: https://github.com/infiniteloop98
 */
class InfiniteTimeProgressBar {
  canRender = false;
  constructor(options = {}) {
    this.options = {
      selector: ".infinite-time-progress-bar",
      duration: 5000,
      callback: () => {},
      ...options,
    };
    if (this.validate()) {
      this.options.duration =
        this.options.duration < 1000 ? 2000 : this.options.duration;
      this.options.duration = Math.abs(this.options.duration) / 1000;
      try {
        this.loadElements();
        this.calculate();
      } catch (error) {
        this.canRender = false;
        console.error(error);
        return false;
      }
    }
  }

  validate = () => {
    const { selector, duration, callback } = this.options;
    if (typeof selector !== "string") {
      showError("Type of selector must be string");
      return false;
    }
    if (typeof duration !== "number") {
      showError("Type of duration must be number");
      return false;
    }
    if (typeof callback !== "function") {
      showError("Type of callback must be function");
      return false;
    }
    function showError(message) {
      console.error(message);
    }
    return true;
  };

  loadElements = () => {
    const { selector, duration } = this.options;
    this.container = document.querySelector(selector);
    this.circle = this.container.querySelector("svg circle");
    this.remainingTimeContainer = this.container.querySelector("p");
    this.radius = this.circle.r.baseVal.value;
    this.circumference = this.radius * 2 * Math.PI;
    this.incrementEverySecond = 100 / Math.round(duration);
    this.circle.style.strokeDasharray = `${this.circumference} ${this.circumference}`;
    this.canRender = true;
  };

  calculate = () => {
    const { duration } = this.options;
    this.progress = 100;
    this.circumference = this.radius * 2 * Math.PI;
    this.incrementEverySecond =
      this.progress / Math.round(Math.floor(duration));
    this.setSecond(duration);
  };

  hideProgressBar = () => {
    this.container.classList.remove("show");
    this.container.classList.add("fade");
  };

  visibleProgressBar = () => {
    this.container.classList.remove("fade", "hide");
    this.container.classList.add("show");
  };

  setSecond = (duration) => {
    this.remainingTimeContainer.innerText = duration;
  };

  setProgress = (percent) => {
    this.circle.style.strokeDashoffset =
      this.circumference - (percent / 100) * this.circumference;
  };

  render = () => {
    if (this.canRender) {
      let { progress } = this,
        { duration, callback } = this.options;
      this.visibleProgressBar();
      duration = duration + 1;
      const timer = setInterval(() => {
        duration = duration - 1;
        progress = progress - this.incrementEverySecond;
        this.setSecond(duration);
        this.setProgress(progress);
        if (duration < 2) {
          clearInterval(timer);
          this.hideProgressBar();
          callback();
          return;
        }
      }, 1000);
      return true;
    }
    return false;
  };
}