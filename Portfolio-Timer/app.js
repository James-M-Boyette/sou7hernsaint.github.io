class Timer {
  constructor(root) {
    // console.log(root);
    // console.log(`app.js was run`);
    root.innerHTML = Timer.getHTML();

    this.elements = {
      minutes: root.querySelector(".timer__part--minutes"),
      seconds: root.querySelector(".timer__part--seconds"),
      control: root.querySelector(".timer__btn--control"),
      reset: root.querySelector(".timer__btn--reset"),
    };
    // console.log(this.elements);
    this.interval = null; // Default interval will be null (so that the timer doesn't run initially)
    // this.interval = 45;
    this.remainingSeconds = 0; // Default will be zero seconds

    // Testing Calls ...
    this.updateInterfaceTime();
    // this.updateInterfaceControls(); // Note: you'll need to change this.interal to something other than null to see if this is working
    // this.start();
    // this.stop();

    this.elements.control.addEventListener("click", () => {
      if (this.interval === null) {
        this.start();
      } else {
        this.stop();
      }
    });
    this.elements.reset.addEventListener("click", () => {
      const inputMinutes = prompt("Enter number of minutes:");

      if (inputMinutes < 60) {
        this.stop();
        this.remainingSeconds = inputMinutes * 60;
        this.updateInterfaceTime();
      }
    });
  }

  // Update interface time
  updateInterfaceTime() {
    // console.log(`Math.floor(this.remainingSeconds / 60)`)
    // console.log(Math.floor(this.remainingSeconds / 60));
    const minutes = Math.floor(this.remainingSeconds / 60);
    // console.log(`this.remainingSeconds % 60`);
    // console.log(this.remainingSeconds % 60);
    const seconds = this.remainingSeconds % 60; // Remainder of division
    // console.log(minutes, seconds); // Check ~21 mins in for testing

    this.elements.minutes.textContent = minutes.toString().padStart(2, "0"); // padd the value of your string if it isn't a double-digit (so we get "01" instead of "1")
    this.elements.seconds.textContent = seconds.toString().padStart(2, "0");
  }

  updateInterfaceControls() {
    if (this.interval === null) {
      // If the timer isn't currently running ...
      // Show the start icon
      this.elements.control.innerHTML = `<span class="material-icons">play_arrow</span>`;
      this.elements.control.classList.add("timer__btn--start");
      this.elements.control.classList.remove("timer__btn--stop");
    } else {
      // else, show the pause icon
      this.elements.control.innerHTML = `<span class="material-icons">pause</span>`;
      this.elements.control.classList.add("timer__btn--stop");
      this.elements.control.classList.remove("timer__btn--start");
    }
  }

  start() {
    if (this.remainingSeconds === 0) return;

    this.interval = setInterval(() => {
      this.remainingSeconds--; // tick-down
      this.updateInterfaceTime();

      if (this.remainingSeconds === 0) {
        this.stop();
      }
    }, 1000); // Run every second

    this.updateInterfaceControls();
  }
  stop() {
    clearInterval(this.interval);

    this.interval = null;

    this.updateInterfaceControls();
  }

  static getHTML() {
    return `
            <div style="display:flex; justify-content:space-around">
                <div style="">
                    <span class="timer__part timer__part--minutes">00</span>
                    <span class="timer__part">:</span>
                    <span class="timer__part timer__part--seconds">00</span>
                </div>
                <div>
                    <button
                        type="button"                
                        class="timer__btn timer__btn--control timer__btn--start"
                    >
                        <span class="material-icons" 
                            style="vertical-align: middle; color:rgb(253, 236, 203)"
                        >play_arrow</span>
                    </button>
                    <button 
                        type="button" 
                        class="timer__btn timer__btn--reset"
                        style="display:"
                        >
                        <span class="material-icons" 
                            style="vertical-align: middle; color:rgb(253, 236, 203)"
                        >timer</span>
                    </button>
                </div>
            </div>

        `;
  }
}
console.log(`New timer made`);
new Timer(document.getElementById("timer"));

// Currently, this is throwing a CORS error ...
