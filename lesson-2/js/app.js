const canvas = document.querySelector('.canvas');
const context = canvas.getContext('2d');

for (var x = 0; x < canvas.width; x += 50) {
    context.moveTo(x, 0);
    context.lineTo(x, 400);
}
  
for (var y = 0; y < canvas.width; y += 50) {
    context.moveTo(0, y);
    context.lineTo(400, y);
}
  
context.strokeStyle = "orange";
context.stroke();

//Task-2
const canvas2 = document.querySelector('.canvas-2');
const context2 = canvas2.getContext('2d');

context2.transform(1, 0, 0, 1, 0, 0)


context2.beginPath();
context2.moveTo(0, 50);
context2.lineTo(0, 117);
context2.lineTo(canvas.width, 117);
context2.lineTo(canvas2.width, 50);
context2.fillStyle = 'white'
context2.fill();
context2.closePath();

context2.beginPath();
context2.moveTo(0, 117);
context2.lineTo(0, 186);
context2.lineTo(canvas.width, 186);
context2.lineTo(canvas2.width, 117);
context2.fillStyle = 'blue'
context2.fill();
context2.closePath();

context2.beginPath();
context2.moveTo(0, 186);
context2.lineTo(0, 250);
context2.lineTo(canvas.width, 250);
context2.lineTo(canvas2.width, 186);
context2.fillStyle = 'red'
context2.fill();
context2.closePath();




