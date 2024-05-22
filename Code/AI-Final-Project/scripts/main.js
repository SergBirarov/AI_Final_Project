import {
  data1,
  data2,
  data3,
  dataForLstm,
  testData1,
  dataDisp,
} from "./global.js";
import {
  CreateNeuralNetwork,
  CreateTrainingData,
  TrainNeuralNetwork,
  PredictNeuralNetwork,
  CreateTestData,
} from "./functions.js";

// Initialize Neural Network
const net = CreateNeuralNetwork(5, 3, [20, 20, 20], "sigmoid");

// Create training data
const trainData1 = CreateTrainingData(data1);
const trainData2 = CreateTrainingData(data2);
const trainData3 = CreateTrainingData(data3);
const testData = CreateTestData(testData1);
const exampleDataDisp = document.getElementById("exampleData");
const testingDataDisp = document.getElementById("testingData");
const predictionsDisp = document.getElementById("predictions");
const neuralNetDisp = document.getElementById("neuralNet");
const lstmBtn = document.getElementById("lstmButton");
const lstmModel = document.getElementById("lstmModel");
const trainBtn = document.getElementById("trainButton");
const netRun = document.getElementById("startButton");

const exampleData = dataDisp.map((item) => {
  const {
    gender,
    race_ethnicity,
    parental_level_of_education,
    lunch,
    test_preparation_course,
    math_score,
    reading_score,
    writing_score,
  } = item;

  return `
    <table class="table table-striped table-bordered table-hover">
      <thead class="thead-light">
        <tr>
          <th>Attribute:</th>
          <th>Data:</th>
        </tr>
      </thead>
      <tbody>
        <tr><td>Gender:</td><td>${gender}</td></tr>
        <tr><td>Race:</td><td>${race_ethnicity}</td></tr>
        <tr><td>Parental Level of Education:</td><td>${parental_level_of_education}</td></tr>
        <tr><td>Lunch:</td><td>${lunch}</td></tr>
        <tr><td>Test Preparation:</td><td>${test_preparation_course}</td></tr>
        <tr><td>Math Score:</td><td>${math_score}</td></tr>
        <tr><td>Reading Score:</td><td>${reading_score}</td></tr>
        <tr><td>Writing Score:</td><td>${writing_score}</td></tr>
      </tbody>
    </table>`;
});

const providedTestData = testData1.map((item) => {
  const {
    gender,
    race_ethnicity,
    parental_level_of_education,
    lunch,
    test_preparation_course,
  } = item;

  return `
    <table class="table table-striped table-bordered table-hover">
      <thead class="thead-light">
        <tr>
          <th>Attribute:</th>
          <th>Data:</th>
        </tr>
      </thead>
      <tbody>
        <tr><td>Gender:</td><td>${gender}</td></tr>
        <tr><td>Race:</td><td>${race_ethnicity}</td></tr>
        <tr><td>Parental Level of Education:</td><td>${parental_level_of_education}</td></tr>
        <tr><td>Lunch:</td><td>${lunch}</td></tr>
        <tr><td>Test Preparation:</td><td>${test_preparation_course}</td></tr>
      </tbody>
    </table>`;
});

trainBtn.addEventListener("click", () => {
  // Train the neural network
  TrainNeuralNetwork(net, trainData1);
  console.log("Training Data 1");
  TrainNeuralNetwork(net, trainData2);
  console.log("Training Data 2");
  TrainNeuralNetwork(net, trainData3);
  console.log("Training Data 3");

  exampleDataDisp.innerHTML = exampleData.join("");
  testingDataDisp.innerHTML = providedTestData.join("");
  console.log("Neural Network Trained");
});

netRun.addEventListener("click", () => {
    const predictions = testData.map((item) => PredictNeuralNetwork(net, item));
    const predictionData = predictions.map((item) => {
      return `
      <table class="table table-striped table-bordered table-hover">
        <thead class="thead-light">
          <tr>
            <th>Attribute:</th>
            <th>Data:</th>
          </tr>
        </thead>
        <tbody>
          <tr><td>Math Score:</td><td>${parseInt(
            item.math_score * 100
          )}</td></tr>
          <tr><td>Reading Score:</td><td>${parseInt(
            item.reading_score * 100
          )}</td></tr>
          <tr><td>Writing Score:</td><td>${parseInt(
            item.writing_score * 100
          )}</td></tr>
        </tbody>
      </table>`;
    });
    predictionsDisp.innerHTML = predictionData.join("");
});

  

  


lstmBtn.addEventListener("click", () => {
  neuralNetDisp.style.display = "none";
  lstmModel.style.display = "block";
});

// LSTM Model
const lstmOptions = {
  iterations: 5000,
  log: true,
  logPeriod: 100,
  errorThresh: 0.011,
  log: (stats) => console.log("stats", stats),
};

const testInputs = [
  "Preheat the oven",
  "Boil water",
  "She sells seashells",
  "Knowledge is power",
  "The football match",
  "The new smartphone",
  "Eating a balanced diet",
  "Investing in stocks",
  "Visiting new countries",
];


// const netLstm = new brain.recurrent.LSTM({ hiddenLayers: [20, 20, 20] });

// netLstm.train(dataForLstm, lstmOptions);

// testInputs.forEach((input) => {
//   const output = netLstm.run(input);
//   console.log(`Input: ${input}\nOutput: ${output}\n`);
//});
