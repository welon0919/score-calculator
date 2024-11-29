const min = 0;
const max = 100;
const calculateBtn = document.getElementById("calculateBtn");
const scoreOutput = document.getElementById("scoreOutput");
const scoreMinusOutput = document.getElementById("scoreMinusOutput")
const subjects = ["chinese", "english", "math", "biology", "history", "geography", "civic"]


const weight = {
    "chinese": 5,
    "english": 5,
    "math": 5,
    "biology": 4,
    "history": 2,
    "geography": 2,
    "civic": 2
}

var scoreTotal = 0;
var scoreMinusTotal = 0;

function validateInput(input) {
    const value = parseInt(input.value);
    if (value < min) {
        input.value = min;
    } else if (value > max) {
        input.value = max;
    } else if (isNaN(value)) {
        input.value = 0;
    }
}
function calcScore() {
    scoreTotal = 0;
    scoreMinusTotal = 0;
    for (let subject of subjects) {
        let score = document.getElementById(subject).value;
        score *= weight[subject];
        if (score != 0) {
            scoreTotal += score;
            scoreMinusTotal += (100 * weight[subject] - score);

        }

    }

}

function updateOutput() {
    scoreOutput.textContent = `加權後的總分是: ${scoreTotal}`;
    scoreMinusOutput.textContent = `加權後的總扣分是: ${scoreMinusTotal}`;

}
calculateBtn.addEventListener("click", () => {
    calcScore();
    updateOutput();
})