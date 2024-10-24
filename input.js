// Restart button
const restartButton = document.getElementById("restartButton");
restartButton.addEventListener("click", function (e) {
	restart();
});

// Pause button
const pauseButton = document.getElementById("pauseButton");
pauseButton.addEventListener("click", function () {
	pauseUpdate();
	this.disabled = true;
	playButton.disabled = false;
});

// Play button
const playButton = document.getElementById("playButton");
playButton.addEventListener("click", function () {
	startUpdate(60);
	this.disabled = true;
	pauseButton.disabled = false;
});

// Randomize button
const randomizeButton = document.getElementById("randomizeSettings");
randomizeButton.addEventListener("click", function (e) {
	generateRandomRules();
});

// Reset strengths button
const resetStrengths = document.getElementById("resetStrengths");
resetStrengths.addEventListener("click", function (e) {
	resetRules();
});

// Slider elements

const alphaAlphaStrengthSlider = document.querySelector(
	"#alphaAlphaStrength input"
);
const alphaBetaStrengthSlider = document.querySelector(
	"#alphaBetaStrength input"
);
const alphaGammaStrengthSlider = document.querySelector(
	"#alphaGammaStrength input"
);
const alphaDeltaStrengthSlider = document.querySelector(
	"#alphaDeltaStrength input"
);

const betaAlphaStrengthSlider = document.querySelector(
	"#betaAlphaStrength input"
);
const betaBetaStrengthSlider = document.querySelector(
	"#betaBetaStrength input"
);
const betaGammaStrengthSlider = document.querySelector(
	"#betaGammaStrength input"
);
const betaDeltaStrengthSlider = document.querySelector(
	"#betaDeltaStrength input"
);

const gammaAlphaStrengthSlider = document.querySelector(
	"#gammaAlphaStrength input"
);
const gammaBetaStrengthSlider = document.querySelector(
	"#gammaBetaStrength input"
);
const gammaGammaStrengthSlider = document.querySelector(
	"#gammaGammaStrength input"
);
const gammaDeltaStrengthSlider = document.querySelector(
	"#gammaDeltaStrength input"
);

const deltaAlphaStrengthSlider = document.querySelector(
	"#deltaAlphaStrength input"
);
const deltaBetaStrengthSlider = document.querySelector(
	"#deltaBetaStrength input"
);
const deltaGammaStrengthSlider = document.querySelector(
	"#deltaGammaStrength input"
);
const deltaDeltaStrengthSlider = document.querySelector(
	"#deltaDeltaStrength input"
);

// Select elements (push / pull controls)

const alphaAlphaSelect = document.querySelector("#alphaAlphaStrength select");
const alphaBetaSelect = document.querySelector("#alphaBetaStrength select");
const alphaGammaSelect = document.querySelector("#alphaGammaStrength select");
const alphaDeltaSelect = document.querySelector("#alphaDeltaStrength select");

const betaAlphaSelect = document.querySelector("#betaAlphaStrength select");
const betaBetaSelect = document.querySelector("#betaBetaStrength select");
const betaGammaSelect = document.querySelector("#betaGammaStrength select");
const betaDeltaSelect = document.querySelector("#betaDeltaStrength select");

const gammaAlphaSelect = document.querySelector("#gammaAlphaStrength select");
const gammaBetaSelect = document.querySelector("#gammaBetaStrength select");
const gammaGammaSelect = document.querySelector("#gammaGammaStrength select");
const gammaDeltaSelect = document.querySelector("#gammaDeltaStrength select");

const deltaAlphaSelect = document.querySelector("#deltaAlphaStrength select");
const deltaBetaSelect = document.querySelector("#deltaBetaStrength select");
const deltaGammaSelect = document.querySelector("#deltaGammaStrength select");
const deltaDeltaSelect = document.querySelector("#deltaDeltaStrength select");

// Slider events

alphaAlphaStrengthSlider.addEventListener("input", function (e) {
	document.querySelector("#alphaAlphaStrength .strength-label").innerHTML =
		Number(e.target.value).toFixed(2);
	rules.find((rule) => rule.a == alpha && rule.b == alpha).strength =
		e.target.value * (alphaAlphaSelect.value == "pull" ? -1 : 1);
});

alphaBetaStrengthSlider.addEventListener("input", function (e) {
	document.querySelector("#alphaBetaStrength .strength-label").innerHTML =
		Number(e.target.value).toFixed(2);
	rules.find((rule) => rule.a == alpha && rule.b == beta).strength =
		e.target.value * (alphaBetaSelect.value == "pull" ? -1 : 1);
});

alphaGammaStrengthSlider.addEventListener("input", function (e) {
	document.querySelector("#alphaGammaStrength .strength-label").innerHTML =
		Number(e.target.value).toFixed(2);
	rules.find((rule) => rule.a == alpha && rule.b == gamma).strength =
		e.target.value * (alphaGammaSelect.value == "pull" ? -1 : 1);
});

alphaDeltaStrengthSlider.addEventListener("input", function (e) {
	document.querySelector("#alphaDeltaStrength .strength-label").innerHTML =
		Number(e.target.value).toFixed(2);
	rules.find((rule) => rule.a == alpha && rule.b == delta).strength =
		e.target.value * (alphaDeltaSelect.value == "pull" ? -1 : 1);
});

betaAlphaStrengthSlider.addEventListener("input", function (e) {
	document.querySelector("#betaAlphaStrength .strength-label").innerHTML =
		Number(e.target.value).toFixed(2);
	rules.find((rule) => rule.a == beta && rule.b == alpha).strength =
		e.target.value * (betaAlphaSelect.value == "pull" ? -1 : 1);
});

betaBetaStrengthSlider.addEventListener("input", function (e) {
	document.querySelector("#betaBetaStrength .strength-label").innerHTML =
		Number(e.target.value).toFixed(2);
	rules.find((rule) => rule.a == beta && rule.b == beta).strength =
		e.target.value * (betaBetaSelect.value == "pull" ? -1 : 1);
});

betaGammaStrengthSlider.addEventListener("input", function (e) {
	document.querySelector("#betaGammaStrength .strength-label").innerHTML =
		Number(e.target.value).toFixed(2);
	rules.find((rule) => rule.a == beta && rule.b == gamma).strength =
		e.target.value * (betaGammaSelect.value == "pull" ? -1 : 1);
});

betaDeltaStrengthSlider.addEventListener("input", function (e) {
	document.querySelector("#betaDeltaStrength .strength-label").innerHTML =
		Number(e.target.value).toFixed(2);
	rules.find((rule) => rule.a == beta && rule.b == delta).strength =
		e.target.value * (betaDeltaSelect.value == "pull" ? -1 : 1);
});

gammaAlphaStrengthSlider.addEventListener("input", function (e) {
	document.querySelector("#gammaAlphaStrength .strength-label").innerHTML =
		Number(e.target.value).toFixed(2);
	rules.find((rule) => rule.a == gamma && rule.b == alpha).strength =
		e.target.value * (gammaAlphaSelect.value == "pull" ? -1 : 1);
});

gammaBetaStrengthSlider.addEventListener("input", function (e) {
	document.querySelector("#gammaBetaStrength .strength-label").innerHTML =
		Number(e.target.value).toFixed(2);
	rules.find((rule) => rule.a == gamma && rule.b == beta).strength =
		e.target.value * (gammaBetaSelect.value == "pull" ? -1 : 1);
});

gammaGammaStrengthSlider.addEventListener("input", function (e) {
	document.querySelector("#gammaGammaStrength .strength-label").innerHTML =
		Number(e.target.value).toFixed(2);
	rules.find((rule) => rule.a == gamma && rule.b == gamma).strength =
		e.target.value * (gammaGammaSelect.value == "pull" ? -1 : 1);
});

gammaDeltaStrengthSlider.addEventListener("input", function (e) {
	document.querySelector("#gammaDeltaStrength .strength-label").innerHTML =
		Number(e.target.value).toFixed(2);
	rules.find((rule) => rule.a == gamma && rule.b == delta).strength =
		e.target.value * (gammaDeltaSelect.value == "pull" ? -1 : 1);
});

deltaAlphaStrengthSlider.addEventListener("input", function (e) {
	document.querySelector("#deltaAlphaStrength .strength-label").innerHTML =
		Number(e.target.value).toFixed(2);
	rules.find((rule) => rule.a == delta && rule.b == alpha).strength =
		e.target.value * (deltaAlphaSelect.value == "pull" ? -1 : 1);
});

deltaBetaStrengthSlider.addEventListener("input", function (e) {
	document.querySelector("#deltaBetaStrength .strength-label").innerHTML =
		Number(e.target.value).toFixed(2);
	rules.find((rule) => rule.a == delta && rule.b == beta).strength =
		e.target.value * (deltaBetaSelect.value == "pull" ? -1 : 1);
});

deltaGammaStrengthSlider.addEventListener("input", function (e) {
	document.querySelector("#deltaGammaStrength .strength-label").innerHTML =
		Number(e.target.value).toFixed(2);
	rules.find((rule) => rule.a == delta && rule.b == gamma).strength =
		e.target.value * (deltaGammaSelect.value == "pull" ? -1 : 1);
});

deltaDeltaStrengthSlider.addEventListener("input", function (e) {
	document.querySelector("#deltaDeltaStrength .strength-label").innerHTML =
		Number(e.target.value).toFixed(2);
	rules.find((rule) => rule.a == delta && rule.b == delta).strength =
		e.target.value * (deltaDeltaSelect.value == "pull" ? -1 : 1);
});

// Select events

alphaAlphaSelect.addEventListener("input", function (e) {
	rules.find((rule) => rule.a == alpha && rule.b == alpha).strength *= -1;
});

alphaBetaSelect.addEventListener("input", function (e) {
	rules.find((rule) => rule.a == alpha && rule.b == beta).strength *= -1;
});

alphaGammaSelect.addEventListener("input", function (e) {
	rules.find((rule) => rule.a == alpha && rule.b == gamma).strength *= -1;
});

alphaDeltaSelect.addEventListener("input", function (e) {
	rules.find((rule) => rule.a == alpha && rule.b == delta).strength *= -1;
});

betaAlphaSelect.addEventListener("input", function (e) {
	rules.find((rule) => rule.a == beta && rule.b == alpha).strength *= -1;
});

betaBetaSelect.addEventListener("input", function (e) {
	rules.find((rule) => rule.a == beta && rule.b == beta).strength *= -1;
});

betaGammaSelect.addEventListener("input", function (e) {
	rules.find((rule) => rule.a == beta && rule.b == gamma).strength *= -1;
});

betaDeltaSelect.addEventListener("input", function (e) {
	rules.find((rule) => rule.a == beta && rule.b == delta).strength *= -1;
});

gammaAlphaSelect.addEventListener("input", function (e) {
	rules.find((rule) => rule.a == gamma && rule.b == alpha).strength *= -1;
});

gammaBetaSelect.addEventListener("input", function (e) {
	rules.find((rule) => rule.a == gamma && rule.b == beta).strength *= -1;
});

gammaGammaSelect.addEventListener("input", function (e) {
	rules.find((rule) => rule.a == gamma && rule.b == gamma).strength *= -1;
});

gammaDeltaSelect.addEventListener("input", function (e) {
	rules.find((rule) => rule.a == gamma && rule.b == delta).strength *= -1;
});

deltaAlphaSelect.addEventListener("input", function (e) {
	rules.find((rule) => rule.a == delta && rule.b == alpha).strength *= -1;
});

deltaBetaSelect.addEventListener("input", function (e) {
	rules.find((rule) => rule.a == delta && rule.b == beta).strength *= -1;
});

deltaGammaSelect.addEventListener("input", function (e) {
	rules.find((rule) => rule.a == delta && rule.b == gamma).strength *= -1;
});

deltaDeltaSelect.addEventListener("input", function (e) {
	rules.find((rule) => rule.a == delta && rule.b == delta).strength *= -1;
});

// Controls headers (collapsable)
const alphaControlsHeader = document.querySelector(
	"#alphaControls .controls-section-header"
);
alphaControlsHeader.addEventListener("click", function () {
	const control = document.getElementById("alphaControls");
	const iconExpanded = document.querySelector("#alphaControls .icon-expanded");
	const iconCollapsed = document.querySelector(
		"#alphaControls .icon-collapsed"
	);
	if (control.classList.contains("collapsed")) {
		control.classList.remove("collapsed");
		iconExpanded.classList.remove("hide");
		iconCollapsed.classList.add("hide");
	} else {
		control.classList.add("collapsed");
		iconExpanded.classList.add("hide");
		iconCollapsed.classList.remove("hide");
	}
});

const betaControlsHeader = document.querySelector(
	"#betaControls .controls-section-header"
);
betaControlsHeader.addEventListener("click", function () {
	const control = document.getElementById("betaControls");
	const iconExpanded = document.querySelector("#betaControls .icon-expanded");
	const iconCollapsed = document.querySelector("#betaControls .icon-collapsed");
	if (control.classList.contains("collapsed")) {
		control.classList.remove("collapsed");
		iconExpanded.classList.remove("hide");
		iconCollapsed.classList.add("hide");
	} else {
		control.classList.add("collapsed");
		iconExpanded.classList.add("hide");
		iconCollapsed.classList.remove("hide");
	}
});

const gammaControlsHeader = document.querySelector(
	"#gammaControls .controls-section-header"
);
gammaControlsHeader.addEventListener("click", function () {
	const control = document.getElementById("gammaControls");
	const iconExpanded = document.querySelector("#gammaControls .icon-expanded");
	const iconCollapsed = document.querySelector(
		"#gammaControls .icon-collapsed"
	);
	if (control.classList.contains("collapsed")) {
		control.classList.remove("collapsed");
		iconExpanded.classList.remove("hide");
		iconCollapsed.classList.add("hide");
	} else {
		control.classList.add("collapsed");
		iconExpanded.classList.add("hide");
		iconCollapsed.classList.remove("hide");
	}
});

const deltaControlsHeader = document.querySelector(
	"#deltaControls .controls-section-header"
);
deltaControlsHeader.addEventListener("click", function () {
	const control = document.getElementById("deltaControls");
	const iconExpanded = document.querySelector("#deltaControls .icon-expanded");
	const iconCollapsed = document.querySelector(
		"#deltaControls .icon-collapsed"
	);
	if (control.classList.contains("collapsed")) {
		control.classList.remove("collapsed");
		iconExpanded.classList.remove("hide");
		iconCollapsed.classList.add("hide");
	} else {
		control.classList.add("collapsed");
		iconExpanded.classList.add("hide");
		iconCollapsed.classList.remove("hide");
	}
});

// Modals
document.querySelectorAll(".modal").forEach((modal) =>
	modal.addEventListener("click", function (e) {
		e.stopPropagation();
	})
);

const overlay = document.getElementById("overlay");
overlay.addEventListener("mousedown", function (e) {
	if (e.target != this) return;

	overlay.classList.add("hide");
	document
		.querySelectorAll(".modal")
		.forEach((modal) => modal.classList.add("hide"));
});

// Save settings modal
const saveSettingsButton = document.getElementById("saveSettings");
const saveSettingsModal = document.getElementById("saveSettingsModal");
const closeSaveSettingsModal = document.querySelectorAll(
	"#saveSettingsModal .close-modal-button"
);
const saveSettingsCode = document.getElementById("saveSettingsCode");

saveSettingsButton.addEventListener("click", function (e) {
	saveSettingsModal.classList.remove("hide");
	overlay.classList.remove("hide");

	const hash = serializeSettings();
	loadSettings(hash);

	console.log(hash);

	saveSettingsCode.innerHTML = hash;
});

closeSaveSettingsModal.forEach((btn) =>
	btn.addEventListener("click", function (e) {
		saveSettingsModal.classList.add("hide");
		overlay.classList.add("hide");
	})
);

// Load settings modal
const openLoadSettingsButton = document.getElementById(
	"openLoadSettingsButton"
);
const loadSettingsModal = document.getElementById("loadSettingsModal");
const closeLoadSettingsModal = document.querySelectorAll(
	"#loadSettingsModal .close-modal-button"
);
const loadSettingsInput = document.getElementById("loadSettingsInput");
const loadSettingsButton = document.getElementById("loadSettingsButton");
const loadSettingsErrorMessage = document.querySelector(
	"#loadSettingsModal .error-message"
);

openLoadSettingsButton.addEventListener("click", function (e) {
	loadSettingsModal.classList.remove("hide");
	overlay.classList.remove("hide");
	loadSettingsInput.focus();
});

closeLoadSettingsModal.forEach((btn) =>
	btn.addEventListener("click", function (e) {
		loadSettingsModal.classList.add("hide");
		overlay.classList.add("hide");
		loadSettingsInput.value = "";
		loadSettingsInput.setCustomValidity("");
		loadSettingsErrorMessage.classList.add("hide");
	})
);

loadSettingsButton.addEventListener("click", function (e) {
	const loadSuccess = loadSettings(loadSettingsInput.value);
	if (loadSuccess) {
		loadSettingsModal.classList.add("hide");
		overlay.classList.add("hide");
		loadSettingsInput.value = "";
		loadSettingsInput.setCustomValidity("");
		loadSettingsErrorMessage.classList.add("hide");
	} else {
		loadSettingsInput.setCustomValidity("Invalid code.");
		loadSettingsErrorMessage.classList.remove("hide");
	}
});

// Color palette modal
const colorPaletteButton = document.getElementById("colorPaletteButton");
const colorPaletteModal = document.getElementById("colorPaletteModal");
const closeColorPaletteModal = document.querySelectorAll(
	"#colorPaletteModal .close-modal-button"
);

const colorPalettes = document.querySelectorAll(".color-palette");

colorPaletteButton.addEventListener("click", function (e) {
	colorPaletteModal.classList.remove("hide");
	overlay.classList.remove("hide");
});

closeColorPaletteModal.forEach((btn) =>
	btn.addEventListener("click", function (e) {
		colorPaletteModal.classList.add("hide");
		overlay.classList.add("hide");
	})
);

colorPalettes.forEach((colorPalette) => {
	colorPalette.addEventListener("click", function () {
		if (switchColorPalette(this.dataset.palette)) {
			colorPalettes.forEach((cp) => cp.classList.remove("selected"));
			this.classList.add("selected");
		}
	});
});

function updateUI() {
	alphaAlphaStrengthSlider.value = Math.abs(
		rules.find((rule) => rule.a == alpha && rule.b == alpha).strength
	);
	document.querySelector("#alphaAlphaStrength .strength-label").innerHTML =
		Number(alphaAlphaStrengthSlider.value).toFixed(2);

	alphaBetaStrengthSlider.value = Math.abs(
		rules.find((rule) => rule.a == alpha && rule.b == beta).strength
	);
	document.querySelector("#alphaBetaStrength .strength-label").innerHTML =
		Number(alphaBetaStrengthSlider.value).toFixed(2);

	alphaGammaStrengthSlider.value = Math.abs(
		rules.find((rule) => rule.a == alpha && rule.b == gamma).strength
	);
	document.querySelector("#alphaGammaStrength .strength-label").innerHTML =
		Number(alphaGammaStrengthSlider.value).toFixed(2);

	alphaDeltaStrengthSlider.value = Math.abs(
		rules.find((rule) => rule.a == alpha && rule.b == delta).strength
	);
	document.querySelector("#alphaDeltaStrength .strength-label").innerHTML =
		Number(alphaDeltaStrengthSlider.value).toFixed(2);

	betaAlphaStrengthSlider.value = Math.abs(
		rules.find((rule) => rule.a == beta && rule.b == alpha).strength
	);
	document.querySelector("#betaAlphaStrength .strength-label").innerHTML =
		Number(betaAlphaStrengthSlider.value).toFixed(2);

	betaBetaStrengthSlider.value = Math.abs(
		rules.find((rule) => rule.a == beta && rule.b == beta).strength
	);
	document.querySelector("#betaBetaStrength .strength-label").innerHTML =
		Number(betaBetaStrengthSlider.value).toFixed(2);

	betaGammaStrengthSlider.value = Math.abs(
		rules.find((rule) => rule.a == beta && rule.b == gamma).strength
	);
	document.querySelector("#betaGammaStrength .strength-label").innerHTML =
		Number(betaGammaStrengthSlider.value).toFixed(2);

	betaDeltaStrengthSlider.value = Math.abs(
		rules.find((rule) => rule.a == beta && rule.b == delta).strength
	);
	document.querySelector("#betaDeltaStrength .strength-label").innerHTML =
		Number(betaDeltaStrengthSlider.value).toFixed(2);

	gammaAlphaStrengthSlider.value = Math.abs(
		rules.find((rule) => rule.a == gamma && rule.b == alpha).strength
	);
	document.querySelector("#gammaAlphaStrength .strength-label").innerHTML =
		Number(gammaAlphaStrengthSlider.value).toFixed(2);

	gammaBetaStrengthSlider.value = Math.abs(
		rules.find((rule) => rule.a == gamma && rule.b == beta).strength
	);
	document.querySelector("#gammaBetaStrength .strength-label").innerHTML =
		Number(gammaBetaStrengthSlider.value).toFixed(2);

	gammaGammaStrengthSlider.value = Math.abs(
		rules.find((rule) => rule.a == gamma && rule.b == gamma).strength
	);
	document.querySelector("#gammaGammaStrength .strength-label").innerHTML =
		Number(gammaGammaStrengthSlider.value).toFixed(2);

	gammaDeltaStrengthSlider.value = Math.abs(
		rules.find((rule) => rule.a == gamma && rule.b == delta).strength
	);
	document.querySelector("#gammaDeltaStrength .strength-label").innerHTML =
		Number(gammaDeltaStrengthSlider.value).toFixed(2);

	deltaAlphaStrengthSlider.value = Math.abs(
		rules.find((rule) => rule.a == delta && rule.b == alpha).strength
	);
	document.querySelector("#deltaAlphaStrength .strength-label").innerHTML =
		Number(deltaAlphaStrengthSlider.value).toFixed(2);

	deltaBetaStrengthSlider.value = Math.abs(
		rules.find((rule) => rule.a == delta && rule.b == beta).strength
	);
	document.querySelector("#deltaBetaStrength .strength-label").innerHTML =
		Number(deltaBetaStrengthSlider.value).toFixed(2);

	deltaGammaStrengthSlider.value = Math.abs(
		rules.find((rule) => rule.a == delta && rule.b == gamma).strength
	);
	document.querySelector("#deltaGammaStrength .strength-label").innerHTML =
		Number(deltaGammaStrengthSlider.value).toFixed(2);

	deltaDeltaStrengthSlider.value = Math.abs(
		rules.find((rule) => rule.a == delta && rule.b == delta).strength
	);
	document.querySelector("#deltaDeltaStrength .strength-label").innerHTML =
		Number(deltaDeltaStrengthSlider.value).toFixed(2);

	alphaAlphaSelect.value =
		rules.find((rule) => rule.a == alpha && rule.b == alpha).strength < 0
			? "pull"
			: "push";
	alphaBetaSelect.value =
		rules.find((rule) => rule.a == alpha && rule.b == beta).strength < 0
			? "pull"
			: "push";
	alphaGammaSelect.value =
		rules.find((rule) => rule.a == alpha && rule.b == gamma).strength < 0
			? "pull"
			: "push";
	alphaDeltaSelect.value =
		rules.find((rule) => rule.a == alpha && rule.b == delta).strength < 0
			? "pull"
			: "push";

	betaAlphaSelect.value =
		rules.find((rule) => rule.a == beta && rule.b == alpha).strength < 0
			? "pull"
			: "push";
	betaBetaSelect.value =
		rules.find((rule) => rule.a == beta && rule.b == beta).strength < 0
			? "pull"
			: "push";
	betaGammaSelect.value =
		rules.find((rule) => rule.a == beta && rule.b == gamma).strength < 0
			? "pull"
			: "push";
	betaDeltaSelect.value =
		rules.find((rule) => rule.a == beta && rule.b == delta).strength < 0
			? "pull"
			: "push";

	gammaAlphaSelect.value =
		rules.find((rule) => rule.a == gamma && rule.b == alpha).strength < 0
			? "pull"
			: "push";
	gammaBetaSelect.value =
		rules.find((rule) => rule.a == gamma && rule.b == beta).strength < 0
			? "pull"
			: "push";
	gammaGammaSelect.value =
		rules.find((rule) => rule.a == gamma && rule.b == gamma).strength < 0
			? "pull"
			: "push";
	gammaDeltaSelect.value =
		rules.find((rule) => rule.a == gamma && rule.b == delta).strength < 0
			? "pull"
			: "push";

	deltaAlphaSelect.value =
		rules.find((rule) => rule.a == delta && rule.b == alpha).strength < 0
			? "pull"
			: "push";
	deltaBetaSelect.value =
		rules.find((rule) => rule.a == delta && rule.b == beta).strength < 0
			? "pull"
			: "push";
	deltaGammaSelect.value =
		rules.find((rule) => rule.a == delta && rule.b == gamma).strength < 0
			? "pull"
			: "push";
	deltaDeltaSelect.value =
		rules.find((rule) => rule.a == delta && rule.b == delta).strength < 0
			? "pull"
			: "push";
}
