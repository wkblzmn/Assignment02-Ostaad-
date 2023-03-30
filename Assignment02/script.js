const calculateBtn = document.getElementById('calculateBtn');
const resultDiv = document.getElementById('result');

calculateBtn.addEventListener('click', function() {
  const weight = Number(document.getElementById('weightInput').value);
  const height = Number(document.getElementById('heightInput').value) / 100;
  const bmi = weight / (height * height);
  const roundedBmi = bmi.toFixed(2);
  
  resultDiv.innerHTML = `Your BMI is: ${roundedBmi}`;
});
