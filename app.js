const square = (num) => num * num;
console.log(square(5)); 

let predictionSamples  = [
    {id:1, name: "John", result:0.85}, 
    {id:2, name: "Jane", result:0.92}, 
    {id:3, name: "Bob", result:0.78},
    {id:4, name: "Alice", result:0.95}
];

const highacuracy = []
for(let i = 0; i < predictionSamples.length; i++){
    if(predictionSamples[i].result > 0.9){
        highacuracy.push(predictionSamples[i])
    }
}
console.log(highacuracy)

const sumAllResults = (samples) => {
  let total = 0;
  for (const sample of samples) {
    total += sample.result;
  }
  return total;
};

console.log("Sum of all results:", sumAllResults(predictionSamples));

function findBestModel(samples) {
  // Handle empty array edge case
  if (samples.length === 0) return null; 
  
  // Assume the first item is the largest to start
  let bestModel = samples[0]; 
  
  for (let i = 1; i < samples.length; i++) {
    if (samples[i].result > bestModel.result) {
      // Update bestModel if a higher result is found
      bestModel = samples[i]; 
    }
  }
  
  return bestModel;
}

console.log("Model with highest result:", findBestModel(predictionSamples));