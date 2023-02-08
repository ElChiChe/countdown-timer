const counter_span_days = document.querySelector(".counter-span-days");
const counter_span_hours = document.querySelector(".counter-span-hours");
const counter_span_minutes = document.querySelector(".counter-span-minutes");
const counter_span_seconds = document.querySelector(".counter-span-seconds");
const counter_div = document.querySelector(".counter-div");

let days = parseInt(counter_span_days.textContent);
let hours = parseInt(counter_span_hours.textContent);
let minutes = parseInt(counter_span_minutes.textContent);
let seconds = parseInt(counter_span_seconds.textContent);



const setTimer = () => {

	let startTimer = setInterval(() => {
		seconds--;
		counter_span_seconds.textContent = seconds;
		if(seconds <= 0) {
			seconds = 60;
			minutes--;
			counter_span_minutes.textContent = minutes;
		}
		
		if (minutes <= 0 ) {
			minutes = 60;
			hours--;
			counter_span_hours.textContent = hours;
		}

		if(hours <= 0) {
			hours = 24;
			days--;
			counter_span_days.textContent = days;
		}

		if(days && hours && minutes && seconds === 0) {
			clearInterval(startTimer);
		}



	}, 1000)

	return startTimer;
}

setTimer();