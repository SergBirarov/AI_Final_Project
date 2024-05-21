import { data1, data2, data3, dataForLstm } from "./global.js";
import { testData1 } from "./global.js";
import { dataDisp } from "./global.js";
import {

CreateNeuralNetwork,
CreateTrainingData,
TrainNeuralNetwork,
PredictNeuralNetwork,
CreateTestData,
CreateLstmData,
} from "./functions.js";



// Create a neural network
// const net = CreateNeuralNetwork(5, 3, [20,20,20], "sigmoid");

// // Create training data
// const trainData1 = CreateTrainingData(data1);
// const trainData2 = CreateTrainingData(data2);
// const trainData3 = CreateTrainingData(data3);
// const testData = CreateTestData(testData1);

// const exampleData = dataDisp.map((item) => {
// const gender = item.gender;
// const race = item.race_ethnicity;
// const parental = item.parental_level_of_education;
// const lunch = item.lunch;
// const test = item.test_preparation_course;
// const math = item.math_score;
// const reading = item.reading_score;
// const writing = item.writing_score;

// return `
//   <table class="table table-striped table-bordered table-hover">
//   <thead class="thead-light">
//     <tr>
//       <th>Attribute:</th>
//       <th>Data:</th>
//     </tr>
//   </thead>
//   <tbody>
//     <tr>
//       <td>Gender:</td>
//       <td>${gender}</td>
//     </tr>
//     <tr>
//       <td>Race:</td>
//       <td>${race}</td>
//     </tr>
//     <tr>
//       <td>Parental Level of Education:</td>
//       <td>${parental}</td>
//     </tr>
//     <tr>
//       <td>Lunch:</td>
//       <td>${lunch}</td>
//     </tr>
//     <tr>
//       <td>Test Preparation:</td>
//       <td>${test}</td>
//     </tr>
//     <tr>
//       <td>Math Score:</td>
//       <td>${math}</td>
//     </tr>
//     <tr>
//       <td>Reading Score:</td>
//       <td>${reading}</td>
//     </tr>
//     <tr>
//       <td>Writing Score:</td>
//       <td>${writing}</td>
//     </tr>
//   </tbody>
// </table>


// `;
// });

// const providedTestData = testData1.map((item) => {
//   const gender = item.gender;
//   const race = item.race_ethnicity;
//   const parental = item.parental_level_of_education;
//   const lunch = item.lunch;
//   const test = item.test_preparation_course;

//   return `
//   <table class="table table-striped table-bordered table-hover">
//   <thead class="thead-light">
//     <tr>
//       <th>Attribute:</th>
//       <th>Data:</th>
//     </tr>
//   </thead>
//   <tbody>
//     <tr>
//       <td>Gender:</td>
//       <td>${gender}</td>
//     </tr>
//     <tr>
//       <td>Race:</td>
//       <td>${race}</td>
//     </tr>
//     <tr>
//       <td>Parental Level of Education:</td>
//       <td>${parental}</td>
//     </tr>
//     <tr>
//       <td>Lunch:</td>
//       <td>${lunch}</td>
//     </tr>
//     <tr>
//       <td>Test Preparation:</td>
//       <td>${test}</td>
//     </tr>
//   </tbody>
// </table>

// `;

// });

// document.getElementById("exampleData").innerHTML = exampleData.join("");

// document.getElementById("testingData").innerHTML = providedTestData.join("");

// document.getElementById("startButton").addEventListener("click", () => {
// // Train the neural network
// TrainNeuralNetwork(net, trainData1);
// TrainNeuralNetwork(net, trainData2);
// TrainNeuralNetwork(net, trainData3);

// // Perform predictions
// const predictions = testData.map((item) => PredictNeuralNetwork(net, item));


// const predictionData = predictions.map((item) => {
//   return `
//   <table class="table table-striped table-bordered table-hover">
//   <thead class="thead-light">
//     <tr>
//       <th>Attribute:</th>
//       <th>Data:</th>
//     </tr>
//   </thead>
//   <tbody>
//     <tr>
//       <td>Math Score:</td>
//       <td>${parseInt(item.math_score * 100)}</td>
//     </tr>
//     <tr>
//       <td>Reading Score:</td>
//       <td>${parseInt(item.reading_score * 100)}</td>
//     </tr>
//     <tr>
//       <td>Writing Score:</td>
//       <td>${parseInt(item.writing_score * 100)}</td>
//     </tr>
//   </tbody>`;
// });

// // Display predictions
// document.getElementById("predictions").innerHTML = predictionData.join("");
//  });


 //LSTM Model
 const lstmOptions = {
     iterations: 3000, 
     log: true, 
     logPeriod: 1000, 
     errorThresh: 0.0011,
    };
    
    
    
    
 const testInputs = [
   "Preheat the oven",
   "Boil water",
   "She sells seashells",
   "Knowledge is power",
 ];
    
    const options = {
        hiddenlayers: [64,64]
    };
    
    const netLstm = new brain.recurrent.LSTM(options);
    
    netLstm.train(dataForLstm, lstmOptions);

    testInputs.forEach((input) => {
  const output = netLstm.run(input);
  console.log(`Input: ${input}\nOutput: ${output}\n`);
});



