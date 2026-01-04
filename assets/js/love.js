// LoveLogic.js
function loveCalculation(name1, name2) {
	const fullName = (name1 + name2).replace(/\s/g, "").toLowerCase();
	console.log("FULL: " + fullName + " Length: " + fullName.length);
	const names = fullName.split("");
	let dupCounter = 0;
	const ogNum = new Array(names.length);

	for (let i = 0; i < names.length; i++) {
		let duplicateFound = false;

		for (let j = i + 1; j < names.length; j++) {
			if (names[i] === names[j]) {
				duplicateFound = true;
				dupCounter++;
				break;
			}
		}

		ogNum[i] = duplicateFound ? 2 : 1;
	}

	let numbers = new Array(names.length).fill(0);
	if (dupCounter >= 1) {
		numbers = ogNum.slice(0, ogNum.length - dupCounter);
	}

	console.log("Initial counts: " + numbers);

	let current = [...numbers];

	while (current.length > 2) {
		const next = [];
		const L = current.length;

		for (let i = 0; i < Math.floor(L / 2); i++) {
			const sum = current[i] + current[L - 1 - i];

			if (sum >= 10) {
				next.push(Math.floor(sum / 10));
				next.push(sum % 10);
			} else {
				next.push(sum);
			}
		}

		// Keep the middle digit untouched if length is odd (Version A)
		if (L % 2 === 1) {
			next.push(current[Math.floor(L / 2)]);
		}

		current = next;
		console.log("Next iteration: " + current);
	}

	return "" + current[0] + current[1];
}

function containsOnlyEnglishLetters(text) {
	// This regex matches strings containing only uppercase and lowercase English letters and spaces.
	// Adjust the regex if other characters (like apostrophes, hyphens, etc.) are allowed.
	return /^[a-zA-Z\s]+$/.test(text);
}

function performCalculation() {
	// Clear previous error
	document.getElementById("error").textContent = "";

	// Get inputs
	const name1 = document.getElementById("urname").value.trim();
	const name2 = document.getElementById("crushname").value.trim();

	if (containsOnlyEnglishLetters(name1) && containsOnlyEnglishLetters(name2)) {
		const compatibility = loveCalculation(name1, name2);
		document.querySelectorAll(
			"#square"
		)[0].innerHTML = `<p>Compatibility:</p><p><br><strong>${compatibility}%</strong></p>`;
	} else {
		alert("Please enter TWO Valid Names!");
	}
}

/* GLITTER */

const app = document.getElementById("lovecalculator");

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
