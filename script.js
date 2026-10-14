const correctData = [
  { label: "EU", short: "EU", value: 9.5 },
  { label: "IRELAND", short: "IRL", value: 24.5 },
  { label: "DENMARK", short: "DNK", value: 22.5 },
  { label: "CROATIA", short: "HRV", value: 21.0 },
  { label: "NETHERLANDS", short: "NLD", value: 15.6 },
  { label: "LUXEMBOURG", short: "LUX", value: 15.2 },
  { label: "SWEDEN", short: "SWE", value: 14.9 },
  { label: "GERMANY", short: "DEU", value: 13.7 },
  { label: "AUSTRIA", short: "AUT", value: 12.5 },
  { label: "SPAIN", short: "ESP", value: 10.6 },
  { label: "GREECE", short: "GRC", value: 10.4 },
  { label: "MALTA", short: "MLT", value: 9.7 },
  { label: "ESTONIA", short: "EST", value: 8.7 },
  { label: "FINLAND", short: "FIN", value: 7.9 },
  { label: "CYPRUS", short: "CYP", value: 7.8 },
  { label: "CZECHIA", short: "CZE", value: 7.2 },
  { label: "SLOVAKIA", short: "SVK", value: 7.1 },
  { label: "FRANCE", short: "FRA", value: 6.7 },
  { label: "PORTUGAL", short: "PRT", value: 6.6 },
  { label: "LITHUANIA", short: "LTU", value: 6.5 },
  { label: "BELGIUM", short: "BEL", value: 6.4 },
  { label: "POLAND", short: "POL", value: 6.3 },
  { label: "BULGARIA", short: "BGR", value: 5.7 },
  { label: "ROMANIA", short: "ROU", value: 5.1 },
  { label: "HUNGARY", short: "HUN", value: 4.6 },
  { label: "ITALY", short: "ITA", value: 4.4 },
  { label: "SLOVENIA", short: "SVN", value: 4.2 },
  { label: "LATVIA", short: "LVA", value: 3.6 },
];

const brokenData = [
  { label: "AUSTRIA", short: "AUT", value: 13.6 },
  { label: "BELGIUM", short: "BEL", value: 8.4 },
  { label: "BULGARIA", short: "BGR", value: 7.8 },
  { label: "CROATIA", short: "HRV", value: 20.6 },
  { label: "CYPRUS", short: "CYP", value: 9.6 },
  { label: "CZECHIA", short: "CZE", value: 9.1 },
  { label: "DENMARK", short: "DNK", value: 21.9 },
  { label: "ESTONIA", short: "EST", value: 10.3 },
  { label: "EU", short: "EU", value: 10.9 },
  { label: "FINLAND", short: "FIN", value: 9.7 },
  { label: "FRANCE", short: "FRA", value: 8.7 },
  { label: "GERMANY", short: "DEU", value: 14.4 },
  { label: "GREECE", short: "GRC", value: 11.7 },
  { label: "HUNGARY", short: "HUN", value: 6.9 },
  { label: "IRELAND", short: "IRL", value: 23.4 },
  { label: "ITALY", short: "ITA", value: 6.7 },
  { label: "LATVIA", short: "LVA", value: 6.0 },
  { label: "LITHUANIA", short: "LTU", value: 8.5 },
  { label: "LUXEMBOURG", short: "LUX", value: 15.8 },
  { label: "MALTA", short: "MLT", value: 11.2 },
  { label: "NETHERLANDS", short: "NLD", value: 16.1 },
  { label: "POLAND", short: "POL", value: 8.3 },
  { label: "PORTUGAL", short: "PRT", value: 8.5 },
  { label: "ROMANIA", short: "ROU", value: 7.3 },
  { label: "SLOVAKIA", short: "SVK", value: 9.0 },
  { label: "SLOVENIA", short: "SVN", value: 6.5 },
  { label: "SPAIN", short: "ESP", value: 11.9 },
  { label: "SWEDEN", short: "SWE", value: 15.5 },
];

const questionBank = [
  {
    id: "q1",
    prompt: "Which indicator title is correct?",
    options: [
      "Online purchases of books online",
      "Online purchases of e-books or audio books as downloads",
      "E-book imports in EU countries",
    ],
    correctIndex: 1,
    revealKey: "title",
    feedback: "Indicator wording must explicitly include “as downloads”.",
  },
  {
    id: "q2",
    prompt: "What is the correct reference period?",
    options: ["2024", "2026", "2025"],
    correctIndex: 2,
    revealKey: "year",
    feedback: "Reference period must be clearly shown in the title.",
  },
  {
    id: "q3",
    prompt: "Which measurement subtitle is correct?",
    options: [
      "(million e-book downloads)",
      "(% of individuals who used internet in the last 3 months)",
      "(% of households with broadband)",
    ],
    correctIndex: 1,
    revealKey: "subtitle",
    feedback: "Unit and population scope are required.",
  },
  {
    id: "q4",
    prompt: "Which Y-axis is correct for this indicator?",
    options: ["Starts at 50", "Starts at -7", "Starts at 0"],
    correctIndex: 2,
    revealKey: "axis",
    feedback: "Negative values are not suitable for this percentage indicator.",
  },
  {
    id: "q5",
    prompt: "How should countries be ordered?",
    options: ["Randomly by region", "Alphabetically", "Descending by value"],
    correctIndex: 2,
    revealKey: "ordering",
    feedback: "Ranking must be descending by value for proper comparison.",
  },
  {
    id: "q6",
    prompt: "What helps compare these data with other data?",
    options: [
      "Add decorative gradients",
      "Show source dataset and update info",
      "Use random bar colours",
    ],
    correctIndex: 1,
    revealKey: "source",
    feedback: "Source and update info are required for traceability.",
  },
  {
    id: "q7",
    prompt: "Which visual aid for comparison should appear?",
    options: [
      "No visual aid",
      "Dotted EU reference line (EU 9.5)",
      "3D axis perspective",
    ],
    correctIndex: 1,
    revealKey: "euLine",
    feedback: "A benchmark line helps instant comparison.",
  },
  {
    id: "q8",
    prompt: "How should the EU value be shown for comparison?",
    options: [
      "Removed from chart",
      "Mixed in list with no distinction",
      "As a benchmark separated from country ranking",
    ],
    correctIndex: 2,
    revealKey: "euBenchmark",
    feedback: "EU should be highlighted as benchmark, not as a regular country.",
  },
];

const ecl = {
  blue140: "#0B39A2",
  blue100: "#0E47CB",
  dark100: "#262B38",
  dark80: "#515560",
  dark20: "#D4D5D7",
  yellow100: "#FFCC00",
  success100: "#0F7B48",
  error100: "#D7003D",
};

const introScreen = document.getElementById("intro-screen");
const studyScreen = document.getElementById("study-screen");
const challengeScreen = document.getElementById("challenge-screen");
const resultScreen = document.getElementById("result-screen");

const startGameBtn = document.getElementById("start-game-btn");
const extendTimeBtn = document.getElementById("extend-time-btn");
const resetBtn = document.getElementById("reset-btn");
const hintBtn = document.getElementById("hint-btn");
const replayBtn = document.getElementById("replay-btn");

const studyCountdown = document.getElementById("study-countdown");
const chartA = document.getElementById("chart-a");
const chartB = document.getElementById("chart-b");

const brokenChartTitle = document.getElementById("broken-chart-title");
const brokenSubtitle = document.getElementById("broken-subtitle");
const brokenSource = document.getElementById("broken-source");

const challengeInstruction = document.getElementById("challenge-instruction");
const errorsList = document.getElementById("errors-list");
const foundCounterTop = document.getElementById("found-counter-top");
const foundCounterSide = document.getElementById("found-counter-side");
const gameStatus = document.getElementById("game-status");
const nextQuestionBtn = document.getElementById("next-question-btn");
const confettiCanvas = document.getElementById("confetti-canvas");

const resultTitle = document.getElementById("result-title");
const resultScore = document.getElementById("result-score");
const resultMeta = document.getElementById("result-meta");
const resultCard = document.querySelector(".result-card");
const introTitle = document.getElementById("intro-title");
const studyTitle = document.getElementById("study-title");
const challengeTitle = document.getElementById("challenge-title");

let state = "intro";
let timerId = null;
let secondsLeft = 15;
let questionIndex = 0;
let score = 0;
let mistakes = 0;
let hintsUsed = 0;
let answeredCurrent = false;
let hadWrongOnCurrent = false;
let hintUsedOnCurrent = false;
let challengeComplete = false;
let confettiFrameId = null;
let confettiRunning = false;
let confettiParticles = [];
let confettiCtx = null;

const reveal = {
  title: false,
  subtitle: false,
  year: false,
  axis: false,
  ordering: false,
  source: false,
  euLine: false,
  euBenchmark: false,
};

function setScreen(nextState) {
  state = nextState;
  introScreen.hidden = nextState !== "intro";
  studyScreen.hidden = nextState !== "study";
  challengeScreen.hidden = nextState !== "challenge";
  resultScreen.hidden = nextState !== "result";
}

function setStatus(text, tone = "neutral") {
  gameStatus.textContent = text;
  gameStatus.style.color =
    tone === "error" ? ecl.error100 : tone === "success" ? ecl.success100 : ecl.blue140;
}

function focusElement(element) {
  if (!element) {
    return;
  }
  requestAnimationFrame(() => {
    element.focus();
  });
}

function stopStudyTimer() {
  if (!timerId) {
    return;
  }
  clearInterval(timerId);
  timerId = null;
}

function getCurrentQuestion() {
  return questionBank[questionIndex] || null;
}

function resetRevealState() {
  Object.keys(reveal).forEach((key) => {
    reveal[key] = false;
  });
}

function updateCounters() {
  const total = questionBank.length;
  foundCounterTop.textContent = `Score ${score}/${total}`;

  const current = Math.min(questionIndex + 1, total);
  foundCounterSide.textContent = challengeComplete ? `${total}/${total}` : `${current}/${total}`;
}

function getBrokenTitleText() {
  const base = "Online purchases of e-books or audio books as downloads";
  if (!reveal.title && !reveal.year) {
    return "";
  }
  return reveal.year ? `${base}, 2025` : base;
}

function applyRevealToMetadata() {
  const titleText = getBrokenTitleText();
  if (titleText) {
    brokenChartTitle.textContent = titleText;
    brokenChartTitle.classList.remove("is-hidden-meta");
    brokenChartTitle.setAttribute("aria-hidden", "false");
  } else {
    brokenChartTitle.textContent = "";
    brokenChartTitle.classList.add("is-hidden-meta");
    brokenChartTitle.setAttribute("aria-hidden", "true");
  }

  if (reveal.subtitle) {
    brokenSubtitle.textContent = "(% of individuals who used internet in the last 3 months)";
    brokenSubtitle.classList.remove("is-hidden-meta");
    brokenSubtitle.setAttribute("aria-hidden", "false");
  } else {
    brokenSubtitle.textContent = "";
    brokenSubtitle.classList.add("is-hidden-meta");
    brokenSubtitle.setAttribute("aria-hidden", "true");
  }

  if (reveal.source) {
    brokenSource.textContent = "Source: Eurostat (isoc_ec_ibuy)";
    brokenSource.classList.remove("is-hidden-meta");
    brokenSource.setAttribute("aria-hidden", "false");
  } else {
    brokenSource.textContent = "";
    brokenSource.classList.add("is-hidden-meta");
    brokenSource.setAttribute("aria-hidden", "true");
  }
}

function getBrokenChartData() {
  let data = brokenData.map((entry) => ({ ...entry }));

  if (reveal.ordering) {
    data.sort((a, b) => b.value - a.value);
  }

  if (reveal.euBenchmark) {
    const eu = data.find((d) => d.label === "EU");
    let rest = data.filter((d) => d.label !== "EU");

    if (reveal.ordering) {
      rest = rest.sort((a, b) => b.value - a.value);
    }

    data = eu ? [eu, ...rest] : rest;
  }

  return data;
}

function renderCurrentQuestion() {
  const q = getCurrentQuestion();
  if (!q) {
    return;
  }

  answeredCurrent = false;
  hadWrongOnCurrent = false;
  hintUsedOnCurrent = false;
  nextQuestionBtn.disabled = true;
  nextQuestionBtn.setAttribute("aria-disabled", "true");
  const isLastQuestion = questionIndex >= questionBank.length - 1;
  nextQuestionBtn.textContent = isLastQuestion ? "Show results" : "Next question";
  nextQuestionBtn.setAttribute("aria-label", isLastQuestion ? "Show results" : "Go to next question");
  setStatus("");

  challengeInstruction.textContent = `Q${questionIndex + 1}/${questionBank.length}: ${q.prompt}`;
  errorsList.replaceChildren();

  q.options.forEach((optionText, idx) => {
    const item = document.createElement("li");
    item.className = "error-item";

    const button = document.createElement("button");
    button.type = "button";
    button.className = "error-item-btn quiz-option-btn";
    button.setAttribute("role", "radio");
    button.setAttribute("aria-checked", "false");
    button.setAttribute("aria-label", `Option ${idx + 1}: ${optionText}`);
    button.textContent = optionText;

    button.addEventListener("click", () => {
      handleAnswer(idx, button);
    });

    item.appendChild(button);
    errorsList.appendChild(item);
  });
}

function revealAfterCorrect(question) {
  if (!question?.revealKey) {
    return;
  }
  reveal[question.revealKey] = true;
  applyRevealToMetadata();
  renderBrokenChart();
}

function goToNextQuestion() {
  if (questionIndex >= questionBank.length - 1) {
    finishChallenge();
    return;
  }

  questionIndex += 1;
  updateCounters();
  renderCurrentQuestion();
}

function handleAnswer(selectedIndex, clickedButton) {
  if (challengeComplete || answeredCurrent) {
    return;
  }

  const q = getCurrentQuestion();
  if (!q) {
    return;
  }

  const buttons = Array.from(errorsList.querySelectorAll(".quiz-option-btn"));

  if (selectedIndex !== q.correctIndex) {
    hadWrongOnCurrent = true;
    mistakes += 1;
    clickedButton.setAttribute("aria-checked", "true");
    clickedButton.classList.add("option-wrong");
    clickedButton.disabled = true;
    setStatus("Wrong. Try again.", "error");
    return;
  }

  answeredCurrent = true;
  buttons.forEach((button, idx) => {
    button.disabled = true;
    button.setAttribute("aria-checked", idx === q.correctIndex ? "true" : "false");
    if (idx === q.correctIndex) {
      button.classList.add("option-correct");
    }
  });

  if (!hadWrongOnCurrent) {
    score += 1;
  }

  updateCounters();
  revealAfterCorrect(q);
  if (q.id === "q1") {
    setStatus("Correct.", "success");
  } else {
    setStatus(`Correct. ${q.feedback}`, "success");
  }
  nextQuestionBtn.disabled = false;
  nextQuestionBtn.setAttribute("aria-disabled", "false");
  nextQuestionBtn.focus();
}

function finishChallenge() {
  challengeComplete = true;

  const total = questionBank.length;
  const percent = Math.round((score / total) * 100);

  const perfect = score === total;
  let title = "Keep practising!";
  if (perfect) {
    title = "Perfect!";
  } else if (percent >= 88) {
    title = "Excellent work!";
  } else if (percent >= 75) {
    title = "Great job!";
  } else if (percent >= 60) {
    title = "Good effort!";
  }

  resultTitle.textContent = title;
  resultScore.textContent = `Score ${score}/${total} (${percent}%)`;
  resultMeta.textContent = `Mistakes: ${mistakes} • Hints: ${hintsUsed}`;
  resultCard?.classList.add("is-success");
  resultCard?.classList.toggle("is-perfect", perfect);
  launchConfetti();

  setScreen("result");
  focusElement(resultTitle);
}

function showHint() {
  if (challengeComplete || answeredCurrent) {
    return;
  }

  const q = getCurrentQuestion();
  if (!q) {
    return;
  }

  const button = errorsList.querySelectorAll(".quiz-option-btn")[q.correctIndex];
  if (!button || button.disabled) {
    return;
  }

  button.classList.add("hint");
  button.focus();
  setTimeout(() => button.classList.remove("hint"), 1200);
  if (!hintUsedOnCurrent) {
    hintsUsed += 1;
    hintUsedOnCurrent = true;
  }
  hadWrongOnCurrent = true;
  setStatus("Hint shown. This question now scores 0 points.");
}

function startChallengePhase() {
  setScreen("challenge");
  challengeComplete = false;
  questionIndex = 0;
  score = 0;
  mistakes = 0;
  hintsUsed = 0;
  answeredCurrent = false;
  hadWrongOnCurrent = false;
  hintUsedOnCurrent = false;

  resetRevealState();
  applyRevealToMetadata();
  renderBrokenChart();

  updateCounters();
  renderCurrentQuestion();
  focusElement(challengeTitle);
  setStatus("");
}

function resetChallenge() {
  if (state !== "challenge") {
    return;
  }
  startChallengePhase();
  setStatus("Challenge reset.");
}

function startStudyPhase() {
  setScreen("study");
  // Re-render now that study screen is visible, otherwise hidden-layout width
  // keeps the initial chart constrained and leaves side whitespace.
  renderChart(chartA, {
    data: correctData,
    yMin: 0,
    yMax: 25,
    yStep: 5,
    withEuLine: true,
    fitToContainer: true,
    customChartHeight: 390,
    customBottomPad: 140,
    customLeftPad: 40,
    customRightPad: 8,
    titleId: "correct-chart",
    descText: "Correct ranked chart with complete metadata.",
  });
  stopConfetti();
  resultCard?.classList.remove("is-success", "is-perfect");
  challengeComplete = false;
  questionIndex = 0;
  score = 0;
  mistakes = 0;
  hintsUsed = 0;
  answeredCurrent = false;
  hadWrongOnCurrent = false;
  hintUsedOnCurrent = false;

  resetRevealState();
  updateCounters();
  setStatus("Study the chart carefully.");
  focusElement(studyTitle);

  secondsLeft = 15;
  studyCountdown.textContent = String(secondsLeft);
  stopStudyTimer();

  timerId = setInterval(() => {
    secondsLeft -= 1;
    studyCountdown.textContent = String(Math.max(0, secondsLeft));

    if (secondsLeft <= 0) {
      stopStudyTimer();
      startChallengePhase();
    }
  }, 1000);
}

function bindEvents() {
  startGameBtn.addEventListener("click", startStudyPhase);

  extendTimeBtn.addEventListener("click", () => {
    if (state !== "study") {
      return;
    }
    secondsLeft += 10;
    studyCountdown.textContent = String(secondsLeft);
  });

  resetBtn.addEventListener("click", resetChallenge);
  hintBtn.addEventListener("click", showHint);
  nextQuestionBtn.addEventListener("click", () => {
    if (!answeredCurrent || challengeComplete) {
      return;
    }
    goToNextQuestion();
  });
  replayBtn.addEventListener("click", startStudyPhase);

  window.addEventListener("resize", () => {
    renderAllCharts();
    if (confettiRunning) {
      confettiCanvas.width = window.innerWidth;
      confettiCanvas.height = window.innerHeight;
    }
  });

  window.addEventListener("beforeunload", () => {
    stopConfetti();
  });
}

function renderChart(container, options) {
  const {
    data,
    yMin,
    yMax,
    yStep,
    withEuLine,
    titleId,
    descText,
    fitToContainer = false,
    customChartHeight = 320,
    customBottomPad = 190,
    customLeftPad = 58,
    customRightPad = 24,
  } = options;

  const NS = "http://www.w3.org/2000/svg";
  const baseBarWidth = 24;
  const baseGap = 18;
  const leftPad = customLeftPad;
  const rightPad = customRightPad;
  const topPad = 20;
  const bottomPad = customBottomPad;
  const chartHeight = customChartHeight;

  const preferredChartWidth = data.length * (baseBarWidth + baseGap);
  const available = Math.max(920, container.clientWidth - leftPad - rightPad - 8);
  const chartWidth = fitToContainer ? available : Math.max(preferredChartWidth, available);
  const bandStep = chartWidth / data.length;
  const barRatio = baseBarWidth / (baseBarWidth + baseGap);
  const barWidth = fitToContainer ? Math.max(9, bandStep * barRatio) : baseBarWidth;
  const gap = fitToContainer ? Math.max(2, bandStep - barWidth) : baseGap;

  const width = leftPad + chartWidth + rightPad;
  const height = topPad + chartHeight + bottomPad;

  const svg = document.createElementNS(NS, "svg");
  svg.setAttribute("viewBox", `0 0 ${width} ${height}`);
  svg.setAttribute("role", "img");
  svg.setAttribute("aria-labelledby", `${titleId}-svg-title ${titleId}-svg-desc`);

  const title = document.createElementNS(NS, "title");
  title.id = `${titleId}-svg-title`;
  title.textContent = titleId;

  const desc = document.createElementNS(NS, "desc");
  desc.id = `${titleId}-svg-desc`;
  desc.textContent = descText;

  svg.append(title, desc);

  const band = document.createElementNS(NS, "rect");
  band.setAttribute("x", String(leftPad));
  band.setAttribute("y", String(topPad + chartHeight));
  band.setAttribute("width", String(chartWidth));
  band.setAttribute("height", String(bottomPad - 16));
  band.setAttribute("fill", "#ffffff");
  svg.appendChild(band);

  const range = yMax - yMin || 1;
  const scaleY = (v) => topPad + ((yMax - v) * chartHeight) / range;

  for (let tick = yMin; tick <= yMax; tick += yStep) {
    const y = scaleY(tick);

    const grid = document.createElementNS(NS, "line");
    grid.setAttribute("x1", String(leftPad));
    grid.setAttribute("x2", String(leftPad + chartWidth));
    grid.setAttribute("y1", String(y));
    grid.setAttribute("y2", String(y));
    grid.setAttribute("stroke", ecl.dark20);
    grid.setAttribute("stroke-dasharray", "4 4");

    const label = document.createElementNS(NS, "text");
    label.setAttribute("x", "12");
    label.setAttribute("y", String(y + 5));
    label.setAttribute("font-size", "14");
    label.setAttribute("fill", ecl.dark100);
    label.textContent = String(tick);

    svg.append(grid, label);
  }

  const yAxis = document.createElementNS(NS, "line");
  yAxis.setAttribute("x1", String(leftPad));
  yAxis.setAttribute("x2", String(leftPad));
  yAxis.setAttribute("y1", String(topPad));
  yAxis.setAttribute("y2", String(topPad + chartHeight));
  yAxis.setAttribute("stroke", ecl.dark80);
  svg.appendChild(yAxis);

  if (withEuLine) {
    const euValue = 9.5;
    const y = scaleY(euValue);

    const line = document.createElementNS(NS, "line");
    line.setAttribute("x1", String(leftPad));
    line.setAttribute("x2", String(leftPad + chartWidth));
    line.setAttribute("y1", String(y));
    line.setAttribute("y2", String(y));
    line.setAttribute("stroke", ecl.yellow100);
    line.setAttribute("stroke-width", "2");
    line.setAttribute("stroke-dasharray", "5 4");

    const tag = document.createElementNS(NS, "text");
    tag.setAttribute("x", String(leftPad + chartWidth - 70));
    tag.setAttribute("y", String(y - 8));
    tag.setAttribute("font-size", "12");
    tag.setAttribute("font-weight", "700");
    tag.setAttribute("fill", "#8a6a00");
    tag.textContent = "EU 9.5";

    svg.append(line, tag);
  }

  data.forEach((row, idx) => {
    const x = leftPad + idx * (barWidth + gap) + gap / 2;
    const y = scaleY(row.value);
    const h = topPad + chartHeight - y;

    const bar = document.createElementNS(NS, "rect");
    bar.setAttribute("x", String(x));
    bar.setAttribute("y", String(y));
    bar.setAttribute("width", String(barWidth));
    bar.setAttribute("height", String(h));
    bar.setAttribute("fill", row.label === "EU" ? ecl.blue140 : ecl.blue100);

    const barTitle = document.createElementNS(NS, "title");
    barTitle.textContent = `${row.label}: ${row.value}%`;
    bar.appendChild(barTitle);

    const lab = document.createElementNS(NS, "text");
    lab.setAttribute("x", String(x + barWidth / 2));
    lab.setAttribute("y", String(topPad + chartHeight + 22));
    lab.setAttribute("font-size", fitToContainer ? "10" : "11");
    lab.setAttribute("fill", ecl.dark100);
    lab.setAttribute("text-anchor", "end");
    lab.setAttribute(
      "transform",
      `rotate(${fitToContainer ? -62 : -52} ${x + barWidth / 2} ${topPad + chartHeight + 22})`,
    );
    lab.textContent = row.label;

    const full = document.createElementNS(NS, "title");
    full.textContent = row.label;
    lab.appendChild(full);

    svg.append(bar, lab);
  });

  container.replaceChildren(svg);
}

function renderBrokenChart() {
  renderChart(chartB, {
    data: getBrokenChartData(),
    yMin: reveal.axis ? 0 : -7,
    yMax: 24,
    yStep: reveal.axis ? 4 : 3,
    withEuLine: reveal.euLine,
    fitToContainer: true,
    customChartHeight: 340,
    customBottomPad: 160,
    titleId: "broken-chart",
    descText: "Challenge chart with progressive corrections.",
  });
}

function renderAllCharts() {
  renderChart(chartA, {
    data: correctData,
    yMin: 0,
    yMax: 25,
    yStep: 5,
    withEuLine: true,
    fitToContainer: true,
    customChartHeight: 390,
    customBottomPad: 140,
    customLeftPad: 40,
    customRightPad: 8,
    titleId: "correct-chart",
    descText: "Correct ranked chart with complete metadata.",
  });

  renderBrokenChart();
}

function launchConfetti() {
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    return;
  }

  if (!confettiCtx) {
    confettiCtx = confettiCanvas.getContext("2d");
  }
  if (!confettiCtx) {
    return;
  }

  if (confettiRunning) {
    return;
  }

  confettiCanvas.width = window.innerWidth;
  confettiCanvas.height = window.innerHeight;

  const colors = [ecl.yellow100, ecl.blue100, "#ffffff", "#6e91e0"];
  confettiParticles = Array.from({ length: 190 }, () => ({
    x: Math.random() * confettiCanvas.width,
    y: -20 - Math.random() * confettiCanvas.height * 0.6,
    vx: -2 + Math.random() * 4,
    vy: 1.5 + Math.random() * 4,
    size: 5 + Math.random() * 5,
    rot: Math.random() * Math.PI,
    vr: -0.15 + Math.random() * 0.3,
    color: colors[Math.floor(Math.random() * colors.length)],
  }));
  confettiRunning = true;

  function frame(now) {
    if (!confettiRunning || !confettiCtx) {
      return;
    }

    confettiCtx.clearRect(0, 0, confettiCanvas.width, confettiCanvas.height);

    confettiParticles.forEach((p) => {
      p.x += p.vx;
      p.y += p.vy;
      p.rot += p.vr;

      if (p.y > confettiCanvas.height + 24) {
        p.y = -24;
        p.x = Math.random() * confettiCanvas.width;
      }

      confettiCtx.save();
      confettiCtx.translate(p.x, p.y);
      confettiCtx.rotate(p.rot);
      confettiCtx.fillStyle = p.color;
      confettiCtx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size * 0.6);
      confettiCtx.restore();
    });

    confettiFrameId = requestAnimationFrame(frame);
  }

  confettiFrameId = requestAnimationFrame(frame);
}

function stopConfetti() {
  confettiRunning = false;
  if (confettiFrameId) {
    cancelAnimationFrame(confettiFrameId);
    confettiFrameId = null;
  }
  if (confettiCtx) {
    confettiCtx.clearRect(0, 0, confettiCanvas.width, confettiCanvas.height);
  }
}

function init() {
  resetRevealState();
  applyRevealToMetadata();
  renderAllCharts();
  bindEvents();
  setScreen("intro");
  focusElement(introTitle);
  updateCounters();
  setStatus("Press Play now.");
}

init();
