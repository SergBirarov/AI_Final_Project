// import brain from "brain.js";
import { data1 } from "./global.js";
import { data2 } from "./global.js";
import { data3 } from "./global.js";
import { testData1 } from "./global.js";
import {
  CreateNeuralNetwork,
  CreateTrainingData,
  TrainNeuralNetwork,
  PredictNeuralNetwork,
} from "./functions.js";

// Create a neural network
const net = CreateNeuralNetwork(5, 3, [5, 5, 5], "relu");

// Create training data
const trainData1 = CreateTrainingData(data1);
const trainData2 = CreateTrainingData(data2);
const trainData3 = CreateTrainingData(data3);

console.log(trainData1);

// Train the neural network
TrainNeuralNetwork(net, trainData1);

// TrainNeuralNetwork(net, trainData2);

// TrainNeuralNetwork(net, trainData3);

// Predict the test data
console.log(PredictNeuralNetwork(net, [0, 2, 0, 1, true]));
