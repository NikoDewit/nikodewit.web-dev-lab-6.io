let modelName = "XYZ";
let duration = 0;
let totalCost = 0;

function recalculate() {
  const costLabel = document.getElementById("calculated-cost");
  if (modelName === "XYZ") {
    totalCost = duration * 100;
  } else if (modelName === "CPRG") {
    totalCost = duration * 213;
  }
  costLabel.innerHTML = totalCost;
}

const modelButton = document.getElementById("model-button");
function changeModel() {
  const textModel = document.getElementById("model-text");
  if (modelName === "XYZ") {
    modelName = "CPRG";
    textModel.innerHTML = "CPRG";
  } else if (modelName === "CPRG") {
    modelName = "XYZ";
    textModel.innerHTML = "XYZ";
  }
  recalculate();
}
modelButton.addEventListener("click", changeModel);

const durationButton = document.getElementById("duration-button");
function changeDuration() {
  const textDuration = document.getElementById("duration-text");
  duration = prompt("Enter new duration (days): ");
  textDuration.innerHTML = duration;
  recalculate();
}
durationButton.addEventListener("click", changeDuration);
