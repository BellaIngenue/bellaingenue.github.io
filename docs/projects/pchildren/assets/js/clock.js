/* CALCULATION */
function performCalculation() {
	// Clear previous error
	document.getElementById("error").textContent = "";

	// Get inputs
	const inDay = document.getElementById("inday").value.trim();
	const outLunch = document.getElementById("outlunch").value.trim();
	const lunchAllowed = document.getElementById("lunchtime").value.trim();
	const inLunch = document.getElementById("inlunch").value.trim();

	// Error checking
	if (!inDay || !outLunch || !lunchAllowed) {
		document.getElementById("error").textContent =
			"Please fill in In Day, Out Day and Time Allowed";
		return;
	}

	// Helper: Convert HH:MM string to Date object
	function toDate(timeStr) {
		const [h, m] = timeStr.split(":").map(Number);
		return new Date(2000, 0, 1, h, m || 0);
	}

	// Convert inputs
	const inDayDate = toDate(inDay);
	const outLunchDate = toDate(outLunch);
	const lunchAllowedMin = parseInt(lunchAllowed, 10);
	const inLunchDate = inLunch ? toDate(inLunch) : null;

	// Min Lunch In = Out Lunch + Allowed Lunch Time
	const minLunchInDate = new Date(
		outLunchDate.getTime() + lunchAllowedMin * 60000
	);
	const minLunchInStr = minLunchInDate.toTimeString().slice(0, 5);

	// Time at Lunch (only if In Lunch entered)
	let lunchTakenMin = "";
	if (inLunchDate) {
		lunchTakenMin = (inLunchDate - outLunchDate) / 60000;
	}

	// Max Out Day (8 hours total work time)
	// If In Lunch missing, can't calculate accurately
	let maxOutStr = "";
	if (inLunchDate) {
		const timeBeforeLunch = (outLunchDate - inDayDate) / 60000;
		const minutesAfterLunch = 480 - timeBeforeLunch;
		const maxOutDate = new Date(
			inLunchDate.getTime() + minutesAfterLunch * 60000
		);
		maxOutStr = maxOutDate.toTimeString().slice(0, 5);
	}

	// Output results into the three squares
	// Output results into the three squares (label on one line, result below)
	document.querySelectorAll(
		"#square1"
	)[0].innerHTML = `<p>Min Lunch in:</p><p><br><strong>${minLunchInStr}</strong></p>`;
	document.querySelectorAll(
		"#square1"
	)[1].innerHTML = `<p>Time at Lunch:</p><p><br><strong>${
		lunchTakenMin || "—"
	} min</strong></p>`;
	document.querySelectorAll(
		"#square1"
	)[2].innerHTML = `<p>Max Out Day:</p><p><br><strong>${
		maxOutStr || "—"
	}</strong></p>`;
}

/* GLITTER */

const app = document.getElementById("clockcalculator");

const myRand = () => {
	let r = 50;
	while (40 < r && r < 60) {
		r = Math.random() * 100;
	}
	return r;
};

for (let i = 0; i < 50; i++) {
	const delay = Math.random() + "s";
	const el = document.createElement("img");
	el.className = "glitter-star";
	el.style.top = myRand() + "%";
	el.style.left = myRand() + "%";
	el.style.animationDelay = delay;
	el.style.msAnimationDelay = delay;
	el.style.webkitAnimationDelay = delay;
	el.style.monAnimationDelay = delay;
	app.appendChild(el);
}
