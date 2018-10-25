google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawChart); 

var mas = [['g','Хищник','Жертва']];
var predatorCount = 0;
var victimCount = 0;
var vF = 100/1000;  //рождаемость жертвы
var vM = 300/100000; //Смертность жертвы
var pM = 70/1000; // смертность хищника
var p = 80/1000000; //коэф.хищника
var g = 500; //поколение
var victimStart = 1000; // нач. кол-во жертв
var predatorStart = 100; // нач. кол-во хищников

mas.push([0,predatorStart,victimStart]);
	function calcCount(){
//mas.push([0,predatorStart,victimStart]);
		for(let i = 1; i <= g; i++){

			predatorCount = Math.round(predatorStart + p * predatorStart * victimStart - pM * predatorStart);
        	victimCount = Math.round(victimStart + vF * victimStart - vM * victimStart * predatorStart);
        	predatorStart = predatorCount;
        	victimStart = victimCount;
        	mas.push([i,predatorStart,victimStart]);
        	
		}

		
	}
	console.log(mas);

	function inputValue(){
		vF = document.getElementById('victimFertility').value; 
		vM = document.getElementById('victimFertility').value; 
		pM = document.getElementById('victimFertility').value; 
		p = document.getElementById('victimFertility').value; 
		g = document.getElementById('victimFertility').value; 
		victimStart = document.getElementById('victimFertility').value; 
		predatorStart = document.getElementById('victimFertility').value; 
	}

	document.getElementById('start').onclick = function(){
		console.log(document.getElementById('victimFertility').value);
	} 
	calcCount();

      function drawChart() {
        var data = google.visualization.arrayToDataTable(mas);

        var options = {
          title: 'Модель Хищник-Жертва',
          curveType: 'function',
          legend: { position: 'bottom' },
          crosshair: { trigger: 'both' },
          explorer: { axis: 'horizontal' },
          textStyle: {color: '#FF0000'}, showColorCode: true
        };

        var chart = new google.visualization.LineChart(document.getElementById('curve_chart'));

         chart.draw(data, options);
      }