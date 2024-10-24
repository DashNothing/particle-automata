const canvas = document.getElementById("simulationCanvas");

const ctx = canvas.getContext("2d", { alpha: false });

const CANVAS_SIZE = 500;
const PARTICLE_SIZE = 3;
const PARTICLE_MASS = 1;
const MAX_DISTANCE = 80;
const FORCE_MULTIPLIER = 0.1;

let alpha = [];
let beta = [];
let gamma = [];
let delta = [];

let currentPalette = "classic";

const colors = {
	classic: {
		alpha: "#3a86ff",
		beta: "#ff006e",
		gamma: "#ffbe0b",
		delta: "#8338ec",
	},
	pastel: {
		alpha: "#118ab2",
		beta: "#ef476f",
		gamma: "#ffd166",
		delta: "#06d6a0",
	},
	monochrome: {
		alpha: "#7400b8",
		beta: "#5e60ce",
		gamma: "#4ea8de",
		delta: "#80ffdb",
	},
};

let particles = [];

let rules = [
	{ a: alpha, b: alpha, strength: 0 },
	{ a: alpha, b: beta, strength: 0 },
	{ a: alpha, b: gamma, strength: 0 },
	{ a: alpha, b: delta, strength: 0 },

	{ a: beta, b: alpha, strength: 0 },
	{ a: beta, b: beta, strength: 0 },
	{ a: beta, b: gamma, strength: 0 },
	{ a: beta, b: delta, strength: 0 },

	{ a: gamma, b: alpha, strength: 0 },
	{ a: gamma, b: beta, strength: 0 },
	{ a: gamma, b: gamma, strength: 0 },
	{ a: gamma, b: delta, strength: 0 },

	{ a: delta, b: alpha, strength: 0 },
	{ a: delta, b: beta, strength: 0 },
	{ a: delta, b: gamma, strength: 0 },
	{ a: delta, b: delta, strength: 0 },
];

let possibleStrengths = [];
for (let i = 0.05; Number(i.toFixed(2)) <= 1; i += 0.05) {
	possibleStrengths.push(Number(i.toFixed(2)));
}

function draw(x, y, color, size) {
	ctx.fillStyle = colors[currentPalette][color];
	//ctx.fillRect(x, y, size, size);
	ctx.beginPath();
	ctx.arc(x, y, size, 0, 2 * Math.PI);
	ctx.fill();
}

function makeParticle(x, y, color) {
	return {
		x: x,
		y: y,
		velocityX: 0,
		velocityY: 0,
		color: color,
	};
}

function getRandomPosition() {
	return Math.random() * 400 + 50;
}

function createParticleGroup(group, particleCount, color) {
	for (let i = 0; i < particleCount; i++) {
		const newParticle = makeParticle(
			getRandomPosition(),
			getRandomPosition(),
			color
		);
		group.push(newParticle);
		particles.push(newParticle);
	}
}

function applyRule(effector, effected, g) {
	if (g == 0) {
		return;
	}

	for (let i = 0; i < effected.length; i++) {
		let forceX = 0;
		let forceY = 0;

		let a = effected[i];

		for (let j = 0; j < effector.length; j++) {
			let b = effector[j];

			const distanceX = a.x - b.x;
			const distanceY = a.y - b.y;

			const distance = Math.sqrt(distanceX * distanceX + distanceY * distanceY);

			if (distance > 0 && distance < MAX_DISTANCE) {
				const force = g * (PARTICLE_MASS / distance);
				forceX += force * distanceX;
				forceY += force * distanceY;
			}
		}

		a.velocityX = (a.velocityX + forceX) * FORCE_MULTIPLIER;
		a.velocityY = (a.velocityY + forceY) * FORCE_MULTIPLIER;

		a.x += a.velocityX;
		a.y += a.velocityY;

		if (a.x - PARTICLE_SIZE / 2 <= 0) {
			a.x = 0;
			a.velocityX *= -1;
		} else if (a.x + PARTICLE_SIZE / 2 >= CANVAS_SIZE) {
			a.x = CANVAS_SIZE - PARTICLE_SIZE;
			a.velocityX *= -1;
		}

		if (a.y - PARTICLE_SIZE / 2 <= 0) {
			a.y = 0;
			a.velocityY *= -1;
		} else if (a.y + PARTICLE_SIZE / 2 >= CANVAS_SIZE) {
			a.y = CANVAS_SIZE - PARTICLE_SIZE;
			a.velocityY *= -1;
		}
	}
}

function generateRandomRules() {
	function getRandomStrength() {
		const isZero = Math.random() < 0.4;
		if (isZero) {
			return 0;
		} else {
			return (
				possibleStrengths[
					Math.floor(Math.random() * possibleStrengths.length)
				] * (Math.round(Math.random()) ? 1 : -1)
			);
		}
	}

	rules = [];

	rules.push(
		{ a: alpha, b: alpha, strength: getRandomStrength() },
		{ a: alpha, b: beta, strength: getRandomStrength() },
		{ a: alpha, b: gamma, strength: getRandomStrength() },
		{ a: alpha, b: delta, strength: getRandomStrength() },

		{ a: beta, b: alpha, strength: getRandomStrength() },
		{ a: beta, b: beta, strength: getRandomStrength() },
		{ a: beta, b: gamma, strength: getRandomStrength() },
		{ a: beta, b: delta, strength: getRandomStrength() },

		{ a: gamma, b: alpha, strength: getRandomStrength() },
		{ a: gamma, b: beta, strength: getRandomStrength() },
		{ a: gamma, b: gamma, strength: getRandomStrength() },
		{ a: gamma, b: delta, strength: getRandomStrength() },

		{ a: delta, b: alpha, strength: getRandomStrength() },
		{ a: delta, b: beta, strength: getRandomStrength() },
		{ a: delta, b: gamma, strength: getRandomStrength() },
		{ a: delta, b: delta, strength: getRandomStrength() }
	);

	updateUI();
}

function resetRules() {
	rules = [];

	rules.push(
		{ a: alpha, b: alpha, strength: 0 },
		{ a: alpha, b: beta, strength: 0 },
		{ a: alpha, b: gamma, strength: 0 },
		{ a: alpha, b: delta, strength: 0 },

		{ a: beta, b: alpha, strength: 0 },
		{ a: beta, b: beta, strength: 0 },
		{ a: beta, b: gamma, strength: 0 },
		{ a: beta, b: delta, strength: 0 },

		{ a: gamma, b: alpha, strength: 0 },
		{ a: gamma, b: beta, strength: 0 },
		{ a: gamma, b: gamma, strength: 0 },
		{ a: gamma, b: delta, strength: 0 },

		{ a: delta, b: alpha, strength: 0 },
		{ a: delta, b: beta, strength: 0 },
		{ a: delta, b: gamma, strength: 0 },
		{ a: delta, b: delta, strength: 0 }
	);

	updateUI();
}

function restart() {
	particles.splice(0, particles.length);

	alpha.splice(0, alpha.length);
	beta.splice(0, beta.length);
	gamma.splice(0, gamma.length);
	delta.splice(0, delta.length);

	createParticleGroup(alpha, 500, "alpha");
	createParticleGroup(beta, 500, "beta");
	createParticleGroup(gamma, 500, "gamma");
	createParticleGroup(delta, 500, "delta");
}

let animationFrameID;
let fps, fpsInterval, startTime, now, then, elapsed;

function startUpdate(fps) {
	fpsInterval = 1000 / fps;
	then = Date.now();
	startTime = then;
	update();
}

function update() {
	now = Date.now();
	elapsed = now - then;

	for (const rule of rules) {
		applyRule(rule.a, rule.b, rule.strength);
	}

	if (elapsed > fpsInterval) {
		then = now - (elapsed % fpsInterval);

		ctx.clearRect(0, 0, CANVAS_SIZE, CANVAS_SIZE);

		for (let i = 0; i < particles.length; i++) {
			draw(particles[i].x, particles[i].y, particles[i].color, PARTICLE_SIZE);
		}
	}

	animationFrameID = requestAnimationFrame(update);
}

function pauseUpdate() {
	cancelAnimationFrame(animationFrameID);
}

function serializeSettings() {
	const strengths = rules.map((rule) =>
		Number((rule.strength * 100).toFixed(2))
	);

	const string = strengths.join(",");

	return btoa(string).replace("==", "");
}

function loadSettings(base64) {
	let strengths;
	try {
		strengths = atob(base64).split(",");
	} catch (e) {
		return false;
	}

	if (strengths.length != rules.length) {
		return false;
	}

	if (strengths.filter((s) => s > 100 || s < -100).length > 0) {
		return false;
	}

	console.log(strengths);

	for (let i = 0; i < rules.length; i++) {
		rules[i].strength = Number((strengths[i] / 100).toFixed(2));
	}

	return true;
}

function switchColorPalette(newPalette) {
	if (!colors[newPalette]) {
		return false;
	}

	currentPalette = newPalette;

	console.log(newPalette);

	let paletteIndex;
	switch (newPalette) {
		case "pastel":
			paletteIndex = 2;
			break;
		case "monochrome":
			paletteIndex = 3;
			break;
		default:
			paletteIndex = 1;
	}

	const root = document.querySelector(":root");
	const computedStyle = getComputedStyle(root);

	root.style.setProperty(
		"--alpha-color",
		computedStyle.getPropertyValue(`--color-scheme${paletteIndex}-alpha`)
	);
	root.style.setProperty(
		"--beta-color",
		computedStyle.getPropertyValue(`--color-scheme${paletteIndex}-beta`)
	);
	root.style.setProperty(
		"--gamma-color",
		computedStyle.getPropertyValue(`--color-scheme${paletteIndex}-gamma`)
	);
	root.style.setProperty(
		"--delta-color",
		computedStyle.getPropertyValue(`--color-scheme${paletteIndex}-delta`)
	);

	return true;
}

createParticleGroup(alpha, 500, "alpha");
createParticleGroup(beta, 500, "beta");
createParticleGroup(gamma, 500, "gamma");
createParticleGroup(delta, 500, "delta");

//generateRandomRules();

startUpdate(60);
