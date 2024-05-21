
// Function Definitions
function CreateNeuralNetwork(input, output, layers, activation) {
  let net = new brain.NeuralNetwork({
    binaryThresh: 0.005,
    iterations: 20000,
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
    const input = {
      gender: gender,
      race_ethnicity: race_ethnicity,
      parental_level_of_education: parental_level_of_education,
      lunch: lunch,
      test_preparation_course: test_preparation_course,
    };
    const output = {math_score: item.math_score / 100 , reading_score: item.reading_score / 100, writing_score: item.writing_score / 100};
    return { input, output };
  });
}

function CreateLstmData(data) {
  return data.map((item) => {
    const input = {input: item.input};
    const output = {output: item.output};
    return {input, output};
  });
  };



function CreateTestData(data) {
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
    const input = {
      gender: gender,
      race_ethnicity: race_ethnicity,
      parental_level_of_education: parental_level_of_education,
      lunch: lunch,
      test_preparation_course: test_preparation_course,
    };
    return input;
  })
};

function TrainNeuralNetwork(net, trainData) {
  net.train(trainData);
}

function PredictNeuralNetwork(net, input) {
  return net.run(input);
}



export {
  CreateNeuralNetwork,
  CreateTrainingData,
  TrainNeuralNetwork,
  PredictNeuralNetwork,
  CreateTestData,
  CreateLstmData,
};

