
// Function Definitions
function CreateNeuralNetwork(input, output, layers, activation) {
  let net = new brain.NeuralNetwork({
    binaryThresh: 0.5,
    hiddenLayers: layers,
    inputSize: input,
    activation: activation,
    leakyReluAlpha: 0.01,
    outputSize: output,
  });
  return net;
}

function CreateTrainingData(data) {
  return data.map((item) => {
    const gender = item.gender === "male" ? 0 : 1;
    const race_ethnicity =
      ["A", "B", "C", "D", "E"].indexOf(item.race_ethnicity) + 1;
    const parental_level_of_education = {
      "high school": 0,
      "associate's degree": 1,
      "master's degree": 2,
      "some college": 3,
      "bachelor's degree": 4,
    }[item.parental_level_of_education.toLowerCase()];
    const lunch = item.lunch === "free/reduced" ? 0 : 1;
    const test_preparation_course =
      item.test_preparation_course === "none" ? false : true;
    const input = [
      gender,
      race_ethnicity,
      parental_level_of_education,
      lunch,
      test_preparation_course,
    ];
    const output = [item.math_score, item.reading_score, item.writing_score];
    return { input, output };
  });
}

function TrainNeuralNetwork(net, trainData) {
  net.train(trainData);
}

function PredictNeuralNetwork(net, input) {
  return net.run(input);
}

// Train the neural network
// TrainNeuralNetwork(net, trainData2);
// TrainNeuralNetwork(net, trainData3);

// Predict the test data
// const predictions = testData1.map((item) =>
//   PredictNeuralNetwork(net, [
//     item.gender === "male" ? 0 : 1,
//     ["A", "B", "C", "D", "E"].indexOf(item.race_ethnicity) + 1,
//     {
//       "high school": 0,
//       "associate's degree": 1,
//       "master's degree": 2,
//       "some college": 3,
//       "bachelor's degree": 4,
//     }[item.parental_level_of_education.toLowerCase()],
//     item.lunch === "free/reduced" ? 0 : 1,
//     item.test_preparation_course === "none" ? false : true,
//   ])
// );

// console.log(predictions);

// Export Statements
export {
  CreateNeuralNetwork,
  CreateTrainingData,
  TrainNeuralNetwork,
  PredictNeuralNetwork,
};
