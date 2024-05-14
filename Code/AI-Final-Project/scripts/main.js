import { data1 } from "./global.js";
import { data2 } from "./global.js";
import { data3 } from "./global.js";
import { testData1 } from "./global.js";
import {
  CreateNeuralNetwork,
  CreateTrainingData,
  TrainNeuralNetwork,
  PredictNeuralNetwork,
  CreateTestData,
} from "./functions.js";
// Create a neural network
const net = CreateNeuralNetwork(5, 3, [5, 5, 5, 4], "sigmoid");
// Create training data
const trainData1 = CreateTrainingData(data1);
const trainData2 = CreateTrainingData(data2);
const trainData3 = CreateTrainingData(data3);
const testData = CreateTestData(testData1);
console.log(testData);

TrainNeuralNetwork(net, trainData1);
TrainNeuralNetwork(net, trainData2);
TrainNeuralNetwork(net, trainData3);

const predictions = testData.map((item) =>
  console.log(PredictNeuralNetwork(net, item))
);
